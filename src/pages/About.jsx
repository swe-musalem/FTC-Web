import {RxDividerHorizontal} from 'react-icons/rx'
import {AiFillEye} from 'react-icons/ai'
import {RiMessage3Fill,
    RiLightbulbFlashLine,RiAwardLine,
    RiServiceLine,
    RiFundsBoxLine,
    RiBrushLine,
        } from 'react-icons/ri'

import {PiProjectorScreenChartDuotone} from 'react-icons/pi'
import {BiBook} from 'react-icons/bi'
import {BsLaptop} from 'react-icons/bs'
import {GiTeamIdea} from 'react-icons/gi'
import { useEffect } from 'react'

function About({title}) {

    useEffect(() => {
        document.title = title
      
        return () => null }, [])


    return <div className="flex flex-col items-center text-center  animate-fade-down animate-once animate-ease-linear ">
        <div className='py-20'>
            <div className='text-2xl'>من نحن</div>
            <RxDividerHorizontal className='text-3xl mx-auto'/>
            <div>مجتمع فعّال وبيئة خصبة للتعلم والابداع</div>
        </div>

        <div className='bg-white grid grid-cols-2 sm:grid-cols-6 place-content-start  gap-y-8 gap-x-2 w-full sm:px-44 px-10 sm:py-4 text-ftc-onSurface'>
            {/* <div className='text-primary col-span-full  pt-10 text-xl'>من نحن</div> */}
            <div className=' flex flex-col sm:flex-row justify-center p-4 sm:py-12 items-center col-span-full  text-sm sm:leading-relaxed gap-x-2 gap-y-2'>
                <div className='flex flex-col sm:flex-row justify-between p-6 sm:py-12 items-center col-span-3 sm:w-1/2  text-sm sm:leading-relaxed bg-ftc-surface rounded-md drop-shadow-xl'>ينظم ويشرف نادي تقنية المستقبل على فعاليات تقنية مختلفة داخل وخارج الجامعة بهدف الارتقاء بالمجتمع الطلابي في الجامعة والمجتمع التقني في المملكة ككُل</div>
                <div className='flex flex-col sm:flex-row justify-between p-6 sm:py-12 items-center col-span-3 sm:w-1/2 text-sm sm:leading-relaxed bg-ftc-surface rounded-md drop-shadow-xl'> تقنية المستقبل هو أحد الأندية الطلابية في كلية علوم الحاسب والمعلومات بجامعة الملك سعود.‏هو مقر للإبداع التقني ومصدر لبث المعرفة التقنية في المملكة.</div>
            </div>
            <div className=' bg-ftc-surface drop-shadow-xl col-span-full sm:col-span-3 p-2 rounded-md'>
                <div className=' flex flex-row-reverse items-center p-4'>
                    <AiFillEye className='text-ftc-primary text-xl'/>
                    <div className='text-ftc-tertiary pr-1'>رؤيتنا</div>
                </div>
                <ul className='list-disc list-inside marker:text-ftc-surface text-sm' dir='rtl'>
                    <li>خلق بيئة ملهمة وتطويرية لرفع الوعي التقني والمهني لدى المجتمع في المملكة العربية السعودية</li>
                    <li className='p-4'>المساهمة الفعالة في تطوير وتكوين بيئة تساهم في رفع مستوى المهتمين في شتى المجالات التقنية المستهدفة</li>
                </ul>
            </div>
            <div className='bg-ftc-surface drop-shadow-xl col-span-3 p-2 rounded-md'>
                    <div className='flex flex-row-reverse items-center p-4'>
                        <RiMessage3Fill className='text-ftc-primary text-xl'/>
                        <div className='text-ftc-tertiary pr-1'>رسالتنا</div>
                    </div>
                    <div className='text-sm leading-loose'>
                    المساهمة في رفع الكفاءة وزيادة الوعي الطلابي لمواكبة التطور التقني. وذلك من خلال إقامة الفعاليات والبرامج التي تساهم في تطوير المهارات الذاتية والعلمية والمهنية نحو تحقيق رؤية المملكة 2030
                    </div>
            </div>
            <div className='col-span-full text-ftc-primary text-xl'>أهداف النادي</div>
            <div className='bg-ftc-surface drop-shadow-xl col-span-2 p-2 rounded-md'>
                <div className='flex flex-row-reverse justify-between items-center p-4 relative'>
                    <PiProjectorScreenChartDuotone className='text-ftc-tertiary text-[7rem]'/>
                    <div> المساهمة في خدمة العملية التعليمية في جميع كليات الجامعة من خلال الخدمات التدريبية والاستشارات المقدمة لهم في مجال الحاسب الآلي وتقنية المعلومات</div>
                    <hr className='border-1 inset-x-20 bottom-0 absolute  border-slate-300 rounded' />
                </div>
                <div className='flex flex-row-reverse justify-between items-center p-4'>
                    <BiBook className='text-ftc-tertiary text-[4rem]'/>
                    <div> الربط بين المجال الأكاديمي والنشاطات الطلابية الذي يقدمه النادي لتحقيق أهداف الكلية </div>
                </div>
                <div>
                    
                </div>
            </div>
            <div className='bg-ftc-surface drop-shadow-xl col-span-2 p-2 rounded-md'>
                <div className='flex flex-row-reverse justify-between items-center p-4 relative'>
                    <RiLightbulbFlashLine className='text-ftc-tertiary text-[3rem]'/>
                    <div>تفعيل الطاقات الطلابية الناجحة من خلال عملنا ضمن منظومة ابداعية</div>
                    <hr className='border-1 inset-x-20 bottom-0 absolute  border-slate-300 rounded' />
                </div>
                <div className='flex flex-row-reverse justify-between items-center p-4 relative'>
                    <RiAwardLine className='text-ftc-tertiary text-[4rem]'/>
                    <div> المساهمة على حصول الطلاب كافة على أفضل البرامج والشهادات في مجال تقنية المعلومات </div>
                    <hr className='border-1 inset-x-20 bottom-0 absolute  border-slate-300 rounded' />
                </div>
                <div className='flex flex-row-reverse justify-between items-center p-4 '>
                    <BsLaptop className='text-ftc-tertiary text-[3rem]'/>
                    <div>تحسين مهارات الطالب في مجالات البيئة المعرفية والتقنية والبرامج الإلكترونية</div>
                </div>
            </div>
            <div className='bg-ftc-surface drop-shadow-xl col-span-2 p-2 rounded-md'>
                <div className='flex flex-row-reverse justify-between items-center p-4 relative'>
                    <PiProjectorScreenChartDuotone className='text-ftc-tertiary text-[7rem]'/>
                    <div> المساهمة في خدمة العملية التعليمية في جميع كليات الجامعة من خلال الخدمات التدريبية والاستشارات المقدمة لهم في مجال الحاسب الآلي وتقنية المعلومات</div>
                    <hr className='border-1 inset-x-20 bottom-0 absolute  border-slate-300 rounded' />
                </div>
                <div className='flex flex-row-reverse justify-between items-center p-4'>
                    <BiBook className='text-ftc-tertiary text-[4rem]'/>
                    <div> الربط بين المجال الأكاديمي والنشاطات الطلابية الذي يقدمه النادي لتحقيق أهداف الكلية </div>
                </div>
            </div>
            <div className='col-span-full text-ftc-primary text-xl'>قيم النادي</div>

            <div className='flex flex-col gap-y-4 pb-10 sm:flex-row sm:justify-between col-span-full'>
                <div className='drop-shadow-xl bg-ftc-surface rounded-md py-4 px-16'>
                    <RiServiceLine className='text-ftc-tertiary text-xl mx-auto'/>
                    <div>التضامن</div>
                </div>
                <div className='drop-shadow-xl bg-ftc-surface rounded-md py-4 px-16'>
                    <RiFundsBoxLine className='text-ftc-tertiary text-xl mx-auto'/>
                    <div>التطور المستمر</div>
                </div>
                <div className='drop-shadow-xl bg-ftc-surface rounded-md py-4 px-16'>
                    <GiTeamIdea className='text-ftc-tertiary text-xl mx-auto'/>
                    <div>العمل بروح الفريق</div>
                </div>
                <div className='drop-shadow-xl bg-ftc-surface rounded-md py-4 px-16'>
                    <RiBrushLine className='text-ftc-tertiary text-xl mx-auto'/>
                    <div>الإبداع</div>
                </div>
            </div>
        </div> 
    </div>
}

export default About