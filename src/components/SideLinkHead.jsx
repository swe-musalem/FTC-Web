
import Button from "./Button";
import React from 'react';
import  { useState } from "react";

function SideLinkHead({to,title,SideIcon,children}) {

    const [isShown, setIsShown] = useState(false);
   
    const boxStyle = `flex justify-between items-center w-3/4`
    const handleShown = ()=>{
       setIsShown(!isShown)
       
    }
    
    

    
    return  <div className="flex flex-col justify-around items-center cursor-pointer w-full text-white" onClick={handleShown}>
            <div className={`${boxStyle}`}>
                <Button className={'font-Cairo'}>{title}</Button>
                {SideIcon}
            </div>
            <div  className={` w-3/4 backdrop-opacity-50 bg-ftc-surface/20 rounded-sm px-2 transition-all duration-500 ease-in-out ${isShown ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}>
                { isShown && children }
            </div>
        </div>
    
}

export default SideLinkHead