import {Card} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {DatePicker} from '../../components/activities/DatePicker'
import { Switch } from "@/components/ui/switch"
import ActivityCard from "@/components/activities/ActivityCard"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Activities() {

    const [eventType, setEventType] = useState('activity')
    console.log(eventType)

    return  <div className='bg-ftc-gray h-screen w-full flex justify-center items-center pt-[10%]'>
                <div className='bg-ftc-surface h-[95%] w-[95%] rounded-xl shadow-xl p-4 overflow-y-scroll flex justify-around items-center'>
                    <Card className='w-1/3 h-3/4 p-6 flex flex-col gap-y-4'>
                        <p className="text-xl " id="title">أضف فعالية !</p>
                        <div className="flex flex-col gap-y-1">
                            <Label htmlfor="titel" className="text-ftc-smoke" >عنوان الفعاليه</Label>
                            <Input className="focus:outline-none" /> 
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label htmlfor="desc" className="text-ftc-smoke" >عنوان الفعاليه</Label>
                            <Textarea htmlfor='desc' className='focus:outline-none shadcnTextArea'/>
                        </div>
                        <div className="flex gap-y-2 w-full">
                            <DatePicker />
                        </div>
                        <div className="flex gap-x-2">
                            <p className="text-ftc-smoke" >للاعضاء فقط</p>
                            <div dir="ltr">
                                <Switch />
                            </div>
                        </div>
                        <RadioGroup defaultValue="activity" dir='rtl' 
                            value={eventType}
                            onValueChange={(v)=>{
                                setEventType(v)
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
                    </Card>
                    <Card className='w-1/3 h-3/4'>
                        <ActivityCard eventType={eventType}/>
                    </Card>
            </div>
    </div>
}