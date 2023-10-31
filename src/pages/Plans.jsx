import {RxDividerHorizontal} from 'react-icons/rx'
import Button from '../components/Button'
import { useEffect } from 'react'

 function Plans({title}) {

    useEffect(() => {
        document.title = title
      
        return () => null }, [])


    const boxStyle = 'flex flex-col items-center gap-y-2 shadow-xl p-4 bg-white rounded-lg w-40'
    

    return  <div className='flex flex-col items-center text-center animate-fade-down animate-once animate-ease-linear'>
                <div className='p-10'>
                    <div className='text-2xl'>مصادر وخطط التخصصات</div>
                    <RxDividerHorizontal className='mx-auto text-[2rem]'/>
                    <div>خطط تخصصات كلية الحاسب وتقنية المعلومات ومصادر المقررات</div>
                </div>
                
                <div className='bg-surface  w-full py-10 md:p-28 flex flex-wrap justify-center gap-x-12 gap-y-10'>
                    <div className={boxStyle}>
                        <div className='text-tertiary'>هندسة البرمجيات</div>
                        <Button primary>
                            <a target='_blank' href="https://ccis.ksu.edu.sa/sites/ccis.ksu.edu.sa/files/imce_images/swe_new_plan.pdf">الخطة</a>
                        </Button>
                        <Button secondary>
                            <a href='https://drive.google.com/drive/folders/1IWFVQHpgGzymTaVBLgXnkx3EfIDXERQB' target="_blank" >المصادر</a>
                        </Button>
                    </div>
                    <div className={boxStyle}>
                        <div className='text-tertiary'>علوم حاسب</div>
                        <Button primary>
                            <a target='_blank' >الخطة</a>
                        </Button>
                        <Button secondary>
                            <a  target="_blank" >المصادر</a>
                        </Button>
                    </div>
                    <div className={boxStyle}>
                        <div className='text-tertiary'>هندسة الحاسب</div>
                        <Button primary>
                            <a target='_blank' href="https://ccis.ksu.edu.sa/en/ce/new-ce-bsc-program">الخطة</a>
                        </Button>
                        <Button secondary >
                            <a href='https://drive.google.com/drive/folders/1c9IRoA6TSBLii7dw6LB4aZ0jmj_5KBcf' target="_blank" >المصادر</a>
                        </Button>
                    </div>
                    <div className={boxStyle}>
                        <div className='text-tertiary'> نظم المعلومات</div>
                        <Button primary>
                            <a target='_blank' href="https://dar.ksu.edu.sa/sites/dar.ksu.edu.sa/files/imce_images/c1.pdf">الخطة</a>
                        </Button>
                        <Button secondary>
                            <a href='https://drive.google.com/folderview?id=1baAYk3j1JHtCcCxvnUZSkJziMQi-OXPr' target="_blank" >المصادر</a>
                        </Button>
                    </div>
                </div>

        </div>

 }


 export default Plans