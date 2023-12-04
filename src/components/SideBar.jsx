import { Outlet } from "react-router-dom";
import img from "../assets/logoNavbar.svg"
import { Divider } from "@tremor/react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";


function SideBar(params) {
    return <div className="flex" dir="rtl">
        {/* sideBar starts here */}
        <div className="bg-ftc-primary h-screen sm:w-56">
            <div className="flex flex-row-reverse items-center">
                <img src={img} className="h-10 w-full mt-2" alt="" />
                <HiMiniBars3BottomRight size={30} className="text-ftc-surface"/>
            </div>
                <Divider className="px-2  text-ftc-surface">
                    اقوى داشبورد
                </Divider>
        </div>
        <Outlet/>
    </div>
}

export default SideBar 