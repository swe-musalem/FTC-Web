
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from 'react';

function SideLinkChild({SideIcon,title,children,...rest}) {

    const boxStyle = `flex justify-between  w-3/5  rounded-md my-2 items-center hover:text-ftcpallete-70`

    const activeClass = "backdrop-opacity-50 text-black bg-ftc-onSurface/20"

    return <NavLink className={`w-full flex justify-center `}  {...rest}>
            <div  className={boxStyle} >
                {title}
                {SideIcon}
            </div>
    </NavLink>
}

export default SideLinkChild