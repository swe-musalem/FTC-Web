
import axios from "axios"
import logo from '../../assets/logoLogin.svg'
import { TextInput } from "@tremor/react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../../components/Button";
import { useState } from "react";
import { Alert } from "flowbite-react";
import { useNavigate  } from "react-router-dom";

import Cookies from 'js-cookie';

function Login() {

   

    const [username, setUsername] = useState('');
    const handleUsernameChange = (e)=>{
        
        setUsername(e.target.value)
    }
    const [password, setPassword] = useState('');
    const handlePasswordChange = (e)=>{
        
        setPassword(e.target.value)
    }

    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [serverErrors, setServerErrors] = useState('');
    


    const navigate = useNavigate()

    const handleSubmit = ()=>{
        setIsLoading(true)
        axios.post ('https://ftc-fast-api.onrender.com/login',{
            "user":username,
            "password":password
        }).then(response=>{
            console.log(response)
            setIsLoading(false)
            setIsLoggedin(true)
            // setToken(response.data.access_token)
            Cookies.set('token', response.data.access_token, { expires: 7 });
            setServerErrors('')
            navigate('/dashboard')
        }).catch(err=>{
            setServerErrors(err.response.data.detail)
            setIsLoading(false)
        })
    }


    return <div className="h-scree flex justify-center font-Cairo">
            {/* left side */}
            <div className="h-screen sm:w-4/6 flex justify-center bg-ftc-primary">
                <img src={logo} className="w-1/2" alt="Logo"  />
            </div>

            <div className="h-screen w-full bg-white flex  justify-center items-center" dir="rtl">
                <div className=" h-1/2 w-1/2">
                    <div className="text-3xl font-bold">تسجيل الدخول</div>
                    <div className="text-gray-400">سجل دخولك في الداشبورد العظيم</div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        {isLoggedin && <Alert color='success'>تم التسجيل</Alert>}
                        {serverErrors && <Alert color='failure'>{serverErrors}</Alert>}
                        <div className="font-semibold text-sm">اسم المستخدم</div>
                        <TextInput icon={FaRegUser} placeholder="username" value={username} onChange={handleUsernameChange} />
                        <div className="font-semibold text-sm">كلمة المرور</div>
                        <TextInput icon={RiLockPasswordLine} placeholder="password" value={password} onChange={handlePasswordChange} />
                        <Button primary className='font-bold' onClick={handleSubmit} disabled={isLoading}> تسجيل الدخول</Button>
                    </div>
                </div>
            </div>
    </div>
}

export default Login