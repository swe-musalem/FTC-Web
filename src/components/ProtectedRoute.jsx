import { useEffect,useState } from "react";
import { Route,useNavigate,Outlet  } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';

function validateToken(token){
    
    // go to fast api
    return axios.post("http://127.0.0.1:9000/validate_token/",null,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}



function  ProtectedRoute({Component,...rest}) {

    console.log('protected')

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const Navigate = useNavigate()

    useEffect(() => {
        const token = Cookies.get('token')
        
        validateToken(token).then(res=>{
            if(res.data.is_valid){
                setIsAuthenticated(true)
            }else{
                Navigate('/login')
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        
        return () => {
            
        };
    }, []);
    return (
          isAuthenticated ? <Outlet/> : Navigate("/login")
    
    )
}

export default ProtectedRoute