
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from 'react';

function SideLink({SideIcon,children,...rest}) {

    

    return <NavLink {...rest}>
            <div  className="flex justify-between items-center" >
                {children}
                {SideIcon}
            </div>
    </NavLink>
}

export default SideLink