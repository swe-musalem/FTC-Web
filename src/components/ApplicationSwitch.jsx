import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch } from "@/components/ui/switch"

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
        <label className='flex items-center my-4 gap-x-4'>
            <span>حاله التقديم </span>
             <div dir="ltr" className='flex justify-center items-center'>
                    <Switch onCheckedChange={toggleStatus} checked={isChecked}/>
                </div>
        </label>
    );
};

export default ApplicationSwitch;
