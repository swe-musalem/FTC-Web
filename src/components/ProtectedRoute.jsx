import { useEffect, useState } from 'react';
import { Route, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import SideBar from './SideBar';
import usePermission from '../hooks/use-permission'
import NotPermissioned from '../pages/NotPermissioned'
import Loading from './Loading';
function validateToken(token) {
  // go to fast api
  return axios.post('https://ftc-api.onrender.com/validate_token/', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function ProtectedRoute({ Component, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const [isLoading, setIsLoading] = useState(true);
  
  const Navigate = useNavigate();
  
  useEffect(() => {
    const token = Cookies.get('token');
    
    validateToken(token)
    .then((res) => {
      if (res.data.is_valid) {
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        Navigate('/login');
      }
    })
    .catch((err) => {});
  }, []);
  
    if (isLoading) {
      return <Loading />
    }
  return (
    // Needs review
    isAuthenticated ? (
     <SideBar Outlet={Outlet}/>
    ) : (
      Navigate('/login')
    )
  );
}

export default ProtectedRoute;
