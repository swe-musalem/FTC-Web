import { useEffect,useState } from "react";
import { Route,useNavigate,Outlet  } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';

function validateToken(token){
    
    // go to fast api
    return axios.post("https://ftc-fast-api.onrender.com/validate_token/",null,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}





function  ProtectedRoute({Component,...rest}) {

   

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const Navigate = useNavigate()

    useEffect(() => {
        const token = Cookies.get('token')
        
        validateToken(token).then(res=>{
            if(res.data.is_valid){
                setIsAuthenticated(true)
                setIsLoading(false)
            }else{
                Navigate('/login')
            }
        }).catch(err=>{
            console.log(err)
        })
    }, []);
    return (
        // Needs review
          isAuthenticated ? (!isLoading ? <Outlet/> : Navigate("/login")) : Navigate("/login")
    
    )
}

export default ProtectedRoute