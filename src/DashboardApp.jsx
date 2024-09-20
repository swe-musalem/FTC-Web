import { Route,Routes } from "react-router-dom"
import Home from "./pages/dashboard/Home"
import Login from "./pages/dashboard/login"
import ProtectedRoute from "./components/ProtectedRoute"
import SideBar from "./components/SideBar"
import Applicants from "./pages/dashboard/Applicants"
import Members from "./pages/dashboard/Members"
import Logs from "./pages/dashboard/Logs"


{/* <Route  element={<ProtectedRoute/>} ></Route> */}

function DashboardApp(){

    
    return <div className="font-cairo">
    <Routes>
        {/* <Route element={<SideBar/>}> */}
            <Route path="dashboard"  element={<ProtectedRoute />} >
                <Route index element={<Home/>} />
                <Route path="applicants" element={<Applicants/> } />
                <Route path="members" element={<Members/> } />
                <Route path="logs" element={<Logs/> } />
            </Route>
        {/* </Route> */}
        <Route  path="login" element={<Login/>}></Route>
    </Routes>
    </div>
}


export default DashboardApp