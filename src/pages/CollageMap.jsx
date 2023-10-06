
import maap from '../assets/m.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { PongSpinner } from 'react-spinners-kit'

function CollageMap({title}) {

    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        document.title = title
      
        return () => null }, [])
    return <div className=' w-full'>
                    {!isLoaded && <div className='flex justify-center'>
                        <PongSpinner size={150} className='mx-auto mt-12' color="#FFFFFF"/>
                        </div>}
                <img src={maap} className='mx-auto' alt="" onLoad={()=>{setIsLoaded(true)}}  />

                            
    </div>
}

export default CollageMap