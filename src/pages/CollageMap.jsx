
import maap from '../assets/m.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'
import { PongSpinner } from 'react-spinners-kit'
import Button from '../components/Button'
import { IoDownloadOutline } from "react-icons/io5";

function CollageMap({title}) {

    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        document.title = title
      
        return () => null }, [])
    return <div className=' w-full h-screen flex flex-col'>
                    {!isLoaded && <div className='flex justify-center items-center h-full'>
                        <PongSpinner size={150} className='mx-auto mt-12' color="#FFFFFF"/>
                        </div>}
                <img src={maap} className='mx-auto' alt="" onLoad={()=>{setIsLoaded(true)}}  />
                <form action={maap} method="get"className='w-full flex justify-center mt-6'>
                    <Button type={'submit'} primary className={'flex items-center'}>
                        <IoDownloadOutline size={25}/>
                        <a href={maap} download={"خريطة الكلية"} >
                            تحميل 
                        </a>
                    </Button>
                </form>
                            
    </div>
}

export default CollageMap