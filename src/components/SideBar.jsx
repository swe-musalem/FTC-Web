import img from "../assets/FTCFocusedPrimary.png"
import { Divider } from "@tremor/react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import SideLinkHead from "./SideLinkHead";
import SideLinkChild from "./SideLinkChild";

import { PiHouseLight } from "react-icons/pi";
import { MdNewspaper } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import NavBar from "./dashboard/NavBar";



function SideBar({Outlet}) {

    
    useEffect(()=>{
        document.body.classList.add('overflow-hidden')
    },[])
   

    return <div className="flex font-Cairo min-h-scren overflow-hidden"  dir="rtl" >
        {/* sideBar starts here */}
        <div className=" sm:w-56 min-w-56 bg-ftc-surface"  
        // style={{
        //   background:
        //     "linear-gradient(100.2deg, #6535BB -8.36%, #2A9EEA 187.38%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
        // }}
        >
            <div className="flex flex-row-reverse justify-center items-center">
                <img src={img} className="h-8 w-8 mt-2" alt="" />
                {/* <HiMiniBars3BottomRight size={30} className="text-ftc-surface "/> */}
            </div>
                <Divider className="px-2  text-ftc-primary">
                    اقوى داشبورد
                </Divider>
                {/* sideLink should match the endpoint of it */}
                <SideLinkHead title="التقديم" sideLink='applicants'  SideIcon={<MdNewspaper/>} >
                    <SideLinkChild title="الموجز" to={"/dashboard"}/>
                    <SideLinkChild title="المتقدمين"  to={"applicants"}/>
                </SideLinkHead>
                <SideLinkHead title="المستخدمين" sideLink='users'  SideIcon={<RiUserSettingsFill/>} >
                    <SideLinkChild title="السجل" to={"logs"} />
                </SideLinkHead>
                <SideLinkHead title="الاعضاء" sideLink='members' SideIcon={<RiUserSettingsFill/>} >
                    <SideLinkChild title="إدارة الاعضاء" to={"members"} />
                    <SideLinkChild title="إدارة اللجان" to={"committee"} />
                </SideLinkHead>
                <SideLinkHead title="الأنشطة" sideLink='activites' SideIcon={<RiUserSettingsFill/>} >
                    <SideLinkChild title="إدارة الأنشطة" to={"activites"} />
                </SideLinkHead>
                
        </div>
        <div className="w-full relative">
            <NavBar/>
            <div className="h-screen border-ftc-divider border-2">
                <Outlet/>
            </div>
        </div>
    </div>
}

export default SideBar 