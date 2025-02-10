import { useEffect, useState } from 'react';
import axios from './features/axios';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoute() {
    const [isLogged, setIsLogged] = useState<boolean | null>(null); 
    const location = useLocation();

    const check = async () => {
        try {
            const res = await axios({
                url: '/users/me',   
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (res.data) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        } catch (err) {
            setIsLogged(false);
        }
    };

    useEffect(() => {
        check();
    }, [location.pathname]); 

    if (isLogged === null) {
        return <div>Loading...</div>; 
    }

    return (
        isLogged ? <Outlet /> : <Navigate to={'/login'} />
    );
}

export default PrivateRoute;
