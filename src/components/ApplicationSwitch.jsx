import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Switch from "react-switch";

const ApplicationSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const fetchStatus = async () => {
        try {
            const response = await axios.get('https://ftc-api-1.onrender.com/status');
            setIsChecked(response.data.is_open);
        } catch (error) {
            console.error('Failed to fetch status', error);
        }
    };

    const toggleStatus = async () => {
        try {
            await axios.post('https://ftc-api-1.onrender.com/toggle-status');
            setIsChecked(prev => !prev);
        } catch (error) {
            console.error('Failed to toggle status', error);
        }
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    return (
        <label className='flex items-center my-4'>
            <span>حاله التقديم </span>
            <Switch
                onChange={toggleStatus}
                checked={isChecked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
            />
        </label>
    );
};

export default ApplicationSwitch;
