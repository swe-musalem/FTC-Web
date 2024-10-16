import React from 'react'
import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className='h-screen w-full bg-ftc-surface  flex justify-center items-center'>
            <CgSpinner size={50} className='text-ftcpallete-80 animate-spin'/>
    </div>
  )
}
