
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from 'react';

function SideLink({SideIcon,title,children,...rest}) {

    const boxStyle = `flex justify-evenly w-3/4  rounded-md my-2 items-center`

    const activeClass = "backdrop-opacity-50 text-black bg-ftc-onSurface/20"

    return <NavLink className={`w-full flex justify-center `}  {...rest}>
            <div  className={boxStyle} >
                {title}
                {SideIcon}
            </div>
    </NavLink>
}

export default SideLink