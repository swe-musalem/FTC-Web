import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Role = 'Admin' | 'HR' | 'commite';

export default function usePermission(role: Role, sideLink: string = 'none') {
    const location = useLocation();
    const [allowedPages, setAllowedPages] = useState<string[]>([]);

    const getCurrentPage = () => {
        // the return value is ['','pagename']
        return location.pathname.split('/dashboard/')[1];
    };
    useEffect(() => {
        if (role === 'Admin') {
            setAllowedPages(['all']);
        } else if (role === 'HR' && (getCurrentPage().includes('applicants') || getCurrentPage().includes('home') )) {
            setAllowedPages(['members', 'applicants']);
        } else if (role === 'commite' && getCurrentPage().includes('committee')) {
            setAllowedPages(['committee']);
        } else if('') {
            setAllowedPages([]);
        }
    }, [role, location]);


    console.log(allowedPages)
   
    const isAllowed = allowedPages.includes(getCurrentPage()) || allowedPages.includes('all');
    const isSideLinkVisible = allowedPages.includes(sideLink) || allowedPages.includes('all');

    return {
        allowedPages,
        isAllowed,
        isSideLinkVisible,
    };
}
