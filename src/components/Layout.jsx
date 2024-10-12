import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


function Layout() {
    return (
        <>
            <div dir="rtl">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}

export default Layout