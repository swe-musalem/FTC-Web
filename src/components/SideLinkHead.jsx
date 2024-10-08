
import Button from "./Button";
import React from 'react';
import  { useState } from "react";
import usePermission from '../hooks/use-permission'
import { IoIosArrowBack,IoIosArrowDown  } from "react-icons/io";


function SideLinkHead({sideLink,title,SideIcon,children}) {

    const [isShown, setIsShown] = useState(false);
   
    const boxStyle = `flex justify-between  gap-x-2 rounded-md my-2 items-center w-3/4 hover:text-ftc-secondary hover:transition-all ease-linear duration-100`
    const handleShown = ()=>{
       setIsShown(!isShown)
       
    }

    const {isAllowed,isSideLinkVisible} = usePermission('Admin',sideLink)
    if (!isSideLinkVisible) {
        return
    }
    

    
    return  <div className="flex flex-col justify-between items-center cursor-pointer w-full text-ftc-primary " onClick={handleShown}>
                <div className={`${boxStyle}`}>
                    {SideIcon}
                    <Button className='text-sm tracking-wider'>{title}</Button>
                    { !isShown &&<IoIosArrowBack/>}
                    { isShown &&<IoIosArrowDown/>}
                </div>
                <div  className={` w-3/4  rounded-md transition-all duration-500 ease-in-out ${isShown ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}>
                    { isShown && children }
                </div>
        </div>
    
}

export default SideLinkHead