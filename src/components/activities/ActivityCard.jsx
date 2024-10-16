import React from 'react'
import { RiTeamLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";

export default function ActivityCard({eventType,title,description,date,responsible,setDay}) {

    const cardBg = {
        activity:'bg-event-activity/[0.18]',
        scaleup:'bg-event-scaleup/[0.18]',
        workshop:'bg-event-workshop/[0.18]'
    }
    
    const ToAr = {
        activity:'فعالية',
        scaleup:'سكيل اب',
        workshop:'ورشة عمل'
    }
   
    const eventIcon = {
        activity: <RiTeamLine size={53} color='#6535BB'/> ,
        scaleup: <IoStarSharp size={53} color='#006971'/>,
        workshop: <RiLightbulbFlashLine size={53} color='#00639B'/>
    }
    const formattedDate = `${date?.getFullYear()}-${date?.getMonth() + 1}-${date?.getDate()}`;
    const daysOfWeek = ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const dayName = daysOfWeek[date.getDay()];
    setDay(dayName);

  return (
    <div className={`w-full h-full ${cardBg[eventType]} bg-event-activity  flex-col justify-center items-center px-8 py-6`}>
        <div className='flex items-center flex-col'>
            {eventIcon[eventType]}
            <p>{ToAr[eventType]}</p>
            <div className='w-full pt-6'>
                <div className='flex justify-between'>
                    <p className='text-lg w-1/2 overflow-hidden truncate'>{title}</p>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-x-1'>
                            <IoCalendarOutline className='text-ftc-primary' size={20}/>
                            <p>{formattedDate}</p>
                        </div>
                        <p>{dayName}</p>
                    </div>
                </div>
                <p>{responsible.name}</p>
                <div className='w-full flex justify-center mt-4'>
                    <p className='break-words max-w-full'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
