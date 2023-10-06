import { useEffect } from "react"
import GraduetsCard from "../components/GraduatesCard"
import musalem from '../assets/graduets/musallam.jpg'
import {RxDividerHorizontal} from 'react-icons/rx'

function Gradutes({title}) {
    useEffect(() => {
        document.title = title
      
        return () => null }, [])


    return <div className="flex flex-col items-center text-center  animate-fade-down animate-once animate-ease-linear">
         <div className='py-20'>
            <div className='text-2xl'>من نحن</div>
            <RxDividerHorizontal className='text-3xl mx-auto'/>
            <div>مجتمع فعّال وبيئة خصبة للتعلم والابداع</div>
        </div>
        <div className=" flex flex-wrap justify-center sm:gap-x-6 gap-x-4 gap-y-5 bg-white w-full sm:px-44 py-10 px-2 sm:py-10 ">
                <GraduetsCard img={musalem} name='مسلم الدوسري' skills={'web Devoloper'} gradDate={2024} linkedin={''} twitter={''} />
                <GraduetsCard img={musalem} name='مسلم الدوسري' skills={'web Devoloper'} gradDate={2024} linkedin={''} twitter={''} />
                <GraduetsCard img={musalem} name='مسلم الدوسري' skills={'web Devoloper'} gradDate={2024} linkedin={''} twitter={''} />
                <GraduetsCard img={musalem} name='مسلم الدوسري' skills={'web Devoloper'} gradDate={2024} linkedin={''} twitter={''} />
                <GraduetsCard img={musalem} name='مسلم الدوسري' skills={'web Devoloper'} gradDate={2024} linkedin={''} twitter={''} />
                <GraduetsCard img={musalem} name='مسلم الدوسري' skills={'web Devoloper'} gradDate={2024} linkedin={''} twitter={''} />
        </div>
    </div>
    
}

export default Gradutes