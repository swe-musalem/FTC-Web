import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from '../../components/activities/DatePicker';
import { Switch } from "@/components/ui/switch";
import ActivityCard from "@/components/activities/ActivityCard";
import { CgSpinner } from "react-icons/cg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import MemberPicker from '../../components/activities/MemeberPicker';
import { useToast } from "@/hooks/use-toast";
import MapPicker from '../../components/map/MapPicker'
import { FaRegFileImage } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";


export default function Activities() {
    const [eventType, setEventType] = useState('activity');
    const [title, setTitle] = useState('');
    const [responsible, setResponsible] = useState({});
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState('');
    const [membersOnly, setMembersOnly] = useState(false);
    const [images, setImages] = useState([])
   
    const [mapMarker, setMapMarker] = useState({
        lat:  24.7229989,
        lng: 46.6195428,
        draggable: true
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const { toast } = useToast();

    const isFormValid = title && description && responsible?.id && description && date;

    const handleSubmit = async () => {
        if (!isFormValid) return; // Prevent submitting if form is invalid
    
        setLoading(true);
        setError(null);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('memberId', responsible?.id || 1);
        formData.append('desc', description);
        formData.append('date', `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
        formData.append('day', day);
        formData.append('isMembersOnly', membersOnly);
        formData.append('eventType', eventType);
        formData.append('lat', mapMarker.lat);
        formData.append('lng', mapMarker.lng);
    
        images.forEach(image => {
            formData.append('files', image.files); 
        });
    
        try {
            const response = await fetch('http://127.0.0.1:8000/activities/', {
                method: 'POST',
                body: formData // No 'Content-Type': 'application/json' because we're sending FormData
            });
    
            if (response.ok) {
                const result = await response.json();
                setTitle('');
                setDescription('');
                setResponsible({});
                setImages([]);
                setSuccess(true);
                toast('Activity created successfully', { type: 'success' });
            } else {
                throw new Error('Failed to create activity');
            }
        } catch (err) {
            setError(err.message);
            toast(err.message, { type: 'error' });
        } finally {
            setLoading(false);
        }
    };
    


    const handleFileChange = (event) => {
        const images = Array.from(event.target.files);

        // Use map to create a promise for each file that resolves to an object with the file name and data URL
        const promises = images.map((image) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                
                reader.onload = (e) => {
                    resolve({
                        name: image.name,
                        src: e.target.result,
                        files:image 
                    });
                };
                
                reader.readAsDataURL(image); 
            });
        });

        Promise.all(promises).then((imagesData) => {
            setImages(imagesData);
        });
    };

    const handleImageDelete = (name)=>{
        const newImages = images.filter((image)=>{
            return image.name !== name
        })
        setImages(newImages)
        console.log(newImages)
    }

    return (
        <div className='bg-ftc-gray h-screen w-full flex justify-center items-center pt-[10%]'>
            <div className='bg-ftc-surface h-[95%] w-[95%] rounded-xl shadow-xl p-4 overflow-y-scroll flex justify-around items-center'>
                <Card className='w-1/3 h-full p-6 flex flex-col gap-y-4 overflow-y-scroll'>
                    <p className="text-xl" id="title">أضف فعالية !</p>
                    <div className="flex flex-col gap-y-3">
                        <Label htmlFor="title" className="text-ftc-smoke">عنوان الفعاليه</Label>
                        <Input className="focus:outline-none" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <MemberPicker value={responsible} setValue={setResponsible} />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Label htmlFor="desc" className="text-ftc-smoke">تفاصيل الفعاليه</Label>
                        <Textarea className='focus:outline-none shadcnTextArea' value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="flex gap-y-2 w-full">
                        <DatePicker date={date} setDate={setDate} />
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-ftc-smoke">للاعضاء فقط</p>
                        <div dir="ltr">
                            <Switch checked={membersOnly} onCheckedChange={() => setMembersOnly(!membersOnly)} />
                        </div>
                    </div>
                    <RadioGroup defaultValue="activity" dir='rtl'
                        value={eventType}
                        onValueChange={(v) => {
                            setEventType(v);
                        }}
                    >
                        <div className="flex items-center gap-x-2">
                            <RadioGroupItem value="activity" id="r1" />
                            <Label htmlFor="r1">فعالية</Label>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <RadioGroupItem value="scaleup" id="r2" />
                            <Label htmlFor="r2">سكيل اب</Label>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <RadioGroupItem value="workshop" id="r3" />
                            <Label htmlFor="r3">ورشة عمل</Label>
                        </div>
                    </RadioGroup>
                    <MapPicker mapMarker={mapMarker} setMapMarker={setMapMarker}/>
                    <div className="border-gray-300 border border-dashed ">
                        <input type="file" id="file" multiple className="hidden w-full h-full" accept="image/*" onChange={handleFileChange} />
                        <label htmlFor="file" className="cursor-pointer w-full h-full flex justify-center items-center p-2 gap-x-2">
                            <p className="text-sm">ارفاق صور</p>
                            <FaRegFileImage />
                        </label>
                    </div>
                    <div className="h-24 my-4 flex gap-x-4 w-72">
                    {
                        images.map((image)=>{
                           return <div key={image.name} className="flex flex-col items-center h-full w-[24rem] relative ">
                            <img src={image?.src} alt={image.name} className="h-full w-full object-contain border rounded-md"/>
                            <IoTrashOutline onClick={()=>{handleImageDelete(image.name)}} color="red" size={24} className=" absolute cursor-pointer p-1 left-0 bg-ftc-surface/60 rounded-md"/>
                            </div>
                        })
                    }

                    </div>
                    <div className='flex justify-center'>
                        <button 
                            onClick={handleSubmit}
                            disabled={loading || !isFormValid}
                            className={`bg-ftc-primary w-1/2 text-center rounded-md text-ftc-surface cursor-pointer py-1 flex justify-center`}
                        >
                            {loading ? <CgSpinner size={20} className='text-ftcpallete-80 animate-spin'/> : 'إنشاء'}
                        </button>
                    </div>

                    {/* Success/Error Message */}
                    
                </Card>

                <Card className='w-1/3 h-3/4'>
                    <ActivityCard 
                        eventType={eventType} 
                        title={title} 
                        description={description} 
                        date={date} 
                        membersOnly={membersOnly} 
                        responsible={responsible}
                        setDay={setDay}
                    />
                </Card>
            </div>
        </div>
    );
}
