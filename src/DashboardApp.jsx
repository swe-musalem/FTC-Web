import { Route,Routes } from "react-router-dom"
import Home from "./pages/dashboard/Home"
import Login from "./pages/dashboard/login"
import ProtectedRoute from "./components/ProtectedRoute"
import SideBar from "./components/SideBar"


{/* <Route  element={<ProtectedRoute/>} ></Route> */}

function DashboardApp(){
    
    return <div className="font-cairo">

    <Routes>
            
        <Route path="/dashboard" element={<SideBar/>}>
            <Route  element={<ProtectedRoute />} >
                <Route index element={<Home/>} />
            </Route>
        </Route>
        <Route  path="login" element={<Login/>}></Route>
    </Routes>
    </div>
}


export default DashboardApp