import { Outlet } from "react-router-dom";
import img from "../assets/LogoBar.png"
import { Divider } from "@tremor/react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import SideLinkHead from "./SideLinkHead";
import SideLink from "./SideLink";

import { PiHouseLight } from "react-icons/pi";
import { MdNewspaper } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";




function SideBar() {
    return <div className="flex font-Cairo min-h-screen" dir="rtl" >
        {/* sideBar starts here */}
        <div className=" sm:w-56"  style={{
          background:
            "linear-gradient(100.2deg, #6535BB -8.36%, #2A9EEA 187.38%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
        }}>
            <div className="flex flex-row-reverse justify-center items-center">
                <img src={img} className="h-8 w-8 mt-2" alt="" />
                {/* <HiMiniBars3BottomRight size={30} className="text-ftc-surface "/> */}
            </div>
                <Divider className="px-2  text-ftc-surface">
                    اقوى داشبورد
                </Divider>
                <SideLinkHead title="التقديم"  SideIcon={<MdNewspaper/>} >
                    <SideLink title="الموجز" to={"/dashboard"}/>
                    <SideLink title="المتقدمين"  to={"applicants"}/>
                </SideLinkHead>
                <SideLinkHead title="المستخدمين"  SideIcon={<RiUserSettingsFill/>} >
                    <SideLink title="السجل" to={"logs"} />
                </SideLinkHead>
                
        </div>
        <Outlet/>
    </div>
}

export default SideBar 