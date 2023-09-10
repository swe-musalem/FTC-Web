import { useState } from "react";
import  Button  from "../components/Button";

function Events(params) {

    const [isSelected, setIsSelected] = useState(false);

    const [selectValue, setSelectValue] = useState('');

    const handleSelect = (event,choice)=>{
        setSelectValue(choice.value)
        
    }

    const choices = [
        {label:'الفعاليات',value:'events',},
        {label:'الاعلانات',value:'ads',},
        {label:'مشاركات المدونة',value:'blog'},
    ]

    return (
        <div className="flex flex-col items-center w-full text-center ">
            <div className="p-10">
                <div className="text-3xl font-bold">الاحداث والفعاليات</div>
                <div></div>
                <div className="pt-8">تسلسل زمني يستعرض انجازات النادي واهم الاحداث والفعاليات</div>
            </div>
            <div className="bg-surface w-full h-screen text-primary flex justify-around items-start py-4">
                {choices.map((choice)=>{
                    return <Button key={choice.value} className={`${selectValue === choice.value && 'bg-black' }`} primary onClick={(event)=>{handleSelect(event,choice);}}   >{choice.label}</Button>
                })}
            </div>
        </div>
    )
}


export default Events