import { useState } from "react";
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

export default function Activities() {
    const [eventType, setEventType] = useState('activity');
    const [title, setTitle] = useState('');
    const [responsible, setResponsible] = useState({});
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState('');
    const [membersOnly, setMembersOnly] = useState(false);
   
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
        try {
            const response = await fetch('http://127.0.0.1:8000/activities/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    memberId: responsible?.id || 1, // Assuming responsible has an `id` or set a default
                    desc: description,
                    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                    day,
                    isMembersOnly: membersOnly,
                    eventType: eventType,
                    lat:mapMarker.lat,
                    lng:mapMarker.lng
                })
            });
            setTitle('')
            setDescription('')
            setResponsible({})

            if (response.ok) {
                setSuccess(true);
            } else {
                throw new Error('Failed to create activity');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-ftc-gray h-screen w-full flex justify-center items-center pt-[10%]'>
            <div className='bg-ftc-surface h-[95%] w-[95%] rounded-xl shadow-xl p-4 overflow-y-scroll flex justify-around items-center'>
                <Card className='w-1/3 h-3/4 p-6 flex flex-col gap-y-4 overflow-y-auto'>
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
