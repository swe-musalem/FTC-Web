import React from 'react'
import { RiTeamLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";

export default function ActivityCard({eventType}) {

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
    //          activity:'#6535BB',
	// 			scaleup:'#006971',
	// 			workshop:'#00639B'
    const eventIcon = {
        activity: <RiTeamLine size={53} color='#6535BB'/> ,
        scaleup: <IoStarSharp size={53} color='#006971'/>,
        workshop: <RiLightbulbFlashLine size={53} color='#00639B'/>
    }
    console.log(cardBg[eventType])
  return (
    <div className={`w-full h-full ${cardBg[eventType]} bg-event-activity  flex-col justify-center items-center px-10 py-6`}>
        <div className='flex justify-center'>
            {eventIcon[eventType]}
        </div>
    </div>
  )
}
