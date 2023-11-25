import { Route,Routes } from "react-router-dom"
import Home from "./pages/dashboard/Home"
import Login from "./pages/dashboard/login"

function DashboardApp(){
    console.log('xx')
    return <Routes>
        <Route path="/dashboard">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}></Route>
            
        </Route>
    </Routes>
}


export default DashboardApp