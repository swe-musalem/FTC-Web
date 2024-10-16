import img from "../assets/FTCFocusedPrimary.png"
import { Divider } from "@tremor/react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import SideLinkHead from "./SideLinkHead";
import SideLinkChild from "./SideLinkChild";
import { useNavigate } from "react-router-dom";
import { PiHouseLight } from "react-icons/pi";
import { MdNewspaper } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import NavBar from "./dashboard/NavBar";
import { IoIosLogOut } from "react-icons/io";
import Cookies from 'js-cookie';


function SideBar({ Outlet }) {
    const navigate = useNavigate();

    useEffect(() => {
      document.body.classList.add("overflow-hidden");
    }, []);
  
    const handleLogout = () => {
        // Delete the token cookie
        Cookies.remove("token"); // Replace "token" with the actual cookie name
    
        // Navigate to the login page
        navigate("/login");
      };
    return (
      <div className="flex font-Cairo min-h-screen overflow-hidden" dir="rtl">
        {/* Sidebar starts here */}
        <div className="sm:w-56 min-w-56 bg-ftc-surface flex flex-col">
          <div className="flex flex-row-reverse justify-center items-center">
            <img src={img} className="h-8 w-8 mt-2" alt="" />
          </div>
          <div className="flex-grow flex flex-col">
            <Divider className="px-2 text-ftc-primary">اقوى داشبورد</Divider>
  
            {/* Side links container */}
            <div className="flex-grow">
              <SideLinkHead title="التقديم" sideLink="applicants" SideIcon={<MdNewspaper />}>
                <SideLinkChild title="الموجز" to="/dashboard" />
                <SideLinkChild title="المتقدمين" to="applicants" />
              </SideLinkHead>
  
              <SideLinkHead title="المستخدمين" sideLink="users" SideIcon={<RiUserSettingsFill />}>
                <SideLinkChild title="السجل" to="logs" />
              </SideLinkHead>
  
              <SideLinkHead title="الاعضاء" sideLink="members" SideIcon={<RiUserSettingsFill />}>
                <SideLinkChild title="إدارة الاعضاء" to="members" />
                <SideLinkChild title="إدارة اللجان" to="committee" />
              </SideLinkHead>
  
              <SideLinkHead title="الأنشطة" sideLink="activites" SideIcon={<RiUserSettingsFill />}>
                <SideLinkChild title="إدارة الأنشطة" to="activites" />
              </SideLinkHead>
            </div>
  
            {/* Align the last SideLinkHead at the bottom */}
            <div className="mt-auto text-red-500 flex items-center justify-center gap-x-4 mb-10 cursor-pointer" onClick={handleLogout}>
                <IoIosLogOut size={25}/>
                <p>تسجيل الدخول</p>
            </div>
          </div>
        </div>
  
        {/* Main content area */}
        <div className="w-full relative">
          <NavBar />
          <div className="h-screen border-ftc-divider border-2">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  
  export default SideBar;
  