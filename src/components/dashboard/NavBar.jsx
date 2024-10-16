import React from 'react'
import Cookies from 'js-cookie';


export default function NavBar() {
    console.log(Cookies.get('user'))
  return (
    <div className='bg-ftc-surface w-full h-[10%] absolute top-0 border-ftc-divider border-b z-10'>
        
    </div>
  )
}
