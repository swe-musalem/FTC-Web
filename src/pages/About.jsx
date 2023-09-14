import {RxDividerHorizontal} from 'react-icons/rx'
import {AiFillEye} from 'react-icons/ai'
import {RiMessage3Fill} from 'react-icons/ri'
import {PiProjectorScreenChartDuotone} from 'react-icons/pi'

function About() {
    return <div className="flex flex-col items-center text-center">
        <div className='py-20'>
            <div className='text-2xl'>من نحن</div>
            <RxDividerHorizontal className='text-3xl mx-auto'/>
            <div>مجتمع فعّال وبيئة خصبة للتعلم والابداع</div>
        </div>

        <div className='bg-white grid grid-cols-4 place-content-start  gap-y-8 gap-x-2 w-full px-44 h-screen text-onSurface'>
            <div className='text-primary col-span-full row-auto pt-10 text-xl'>من نحن</div>
            <div className=' flex justify-between p-2 items-center col-span-full  text-sm leading-relaxed bg-surface rounded-md drop-shadow-xl'>
                <div>ينظم ويشرف نادي تقنية المستقبل على فعاليات تقنية مختلفة داخل وخارج الجامعة بهدف الارتقاء بالمجتمع الطلابي في الجامعة والمجتمع التقني في المملكة ككُل.</div>
                <div> تقنية المستقبل هو أحد الأندية الطلابية في كلية علوم الحاسب والمعلومات بجامعة الملك سعود.‏هو مقر للإبداع التقني ومصدر لبث المعرفة التقنية في المملكة.</div>
            </div>
            <div className=' bg-surface drop-shadow-xl col-span-2 p-2 rounded-md'>
                <div className=' flex flex-row-reverse items-center p-4'>
                    <AiFillEye className='text-primary text-xl'/>
                    <div className='text-tertiary pr-1'>رؤيتنا</div>
                </div>
                <ul className='list-disc list-inside marker:text-primary text-sm' dir='rtl'>
                    <li>خلق بيئة ملهمة وتطويرية لرفع الوعي التقني والمهني لدى المجتمع في المملكة العربية السعودية</li>
                    <li className='p-4'>المساهمة الفعالة في تطوير وتكوين بيئة تساهم في رفع مستوى المهتمين في شتى المجالات التقنية المستهدفة</li>
                </ul>
            </div>
            <div className='bg-surface drop-shadow-xl col-span-2 p-2 rounded-md'>
                    <div className='flex flex-row-reverse items-center p-4'>
                        <RiMessage3Fill className='text-primary text-xl'/>
                        <div className='text-tertiary pr-1'>رسالتنا</div>
                    </div>
                    <div className='text-sm leading-loose'>
                    المساهمة في رفع الكفاءة وزيادة الوعي الطلابي لمواكبة التطور التقني. وذلك من خلال إقامة الفعاليات والبرامج التي تساهم في تطوير المهارات الذاتية والعلمية والمهنية نحو تحقيق رؤية المملكة 2030
                    </div>
            </div>
            <div className='col-span-full text-primary text-xl'>أهداف النادي</div>
            <div className='bg-surface drop-shadow-xl col-span-2 p-2 rounded-md'>
                <div className='flex flex-row-reverse justify-between items-center p-4'>
                    <PiProjectorScreenChartDuotone className='text-tertiary text-[4rem]'/>
                    <div> المساهمة في خدمة العملية التعليمية في جميع كليات الجامعة من خلال الخدمات التدريبية والاستشارات المقدمة لهم في مجال الحاسب الآلي وتقنية المعلومات</div>
                </div>
                <div>
                    
                </div>
            </div>
        </div> 
    </div>
}

export default About