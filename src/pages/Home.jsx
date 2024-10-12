import Pannel from "../components/Pannel";
import SocialMedia from "../components/SocialMedia";
import Activites from "../components/Activities";
import SocialIcons from "../components/SocialIcons";
import About from "./About";
import heroImg from "./../eventsImages/img2.jpeg"
import heroImg2 from "./../eventsImages/img3.jpeg"
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsEye } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


function Home({title}) {
  useEffect(() => {
    document.title = title
    document.body.classList.add = 'overscroll-none'
    
    return () => null }, [])
    const imgClass = "p- h-14 brightness-0 "
  return (
    <>
    <div className="relative">
    <div className="px-[5%] md:px-[10%] lg:px-[20%] mt-10 mb-5 text-black ">

      <div className="grid gap-10 lg:grid-cols-2 xl:min-h-[50%]">
      <motion.div
      initial={{ x : 100}}
      animate={{ x: 0 }}
      transition={{ duration: 1.75,}}
      >
        <div className="relative xl:text-">
          
            <h1 className="font-bold text-3xl text-center md:text-start md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3x:text-8xl">

                    النادي <span className="text-purple-500 leading-tight">الأول</span> <br/> بالجامعة <span className="text-cyan-500">الأولى</span> عربيًا

            </h1>

            <p className="text-slate-600 text-lg lg:text-xl xl:text-2xl mt-12">تعزيز الابتكار والروابط لتحفيز
            الأفكار التحويلية والتقدم التكنولوجي.</p>
            <div className="">
              <button className="bg-slate-900 text-white rounded-full px-3 py-2 xl:text-lg hover:bg-black mt-14">الانضمام</button>
            </div>
          </div>
          </motion.div>
        


        <motion.div initial={{ y:-25 }} animate={{y:0}} transition={{duration:5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.2}} className="flex  mb-32 justify-center   relative" >
            <div className="relative">
              <div className="top-0 bottom-0 w-[100%] xl:right-[30%]  absolute bg-ftc-primary/50 md:w-[50%] rounded-full blur-3xl"></div>
              <img className="w-64 xl:w-96 xl:right-56  opacity-40" src="https://images.vexels.com/content/157944/preview/dots-grid-design-37d7ed.png" />
              <img src={heroImg} className="w-40 lg:w-40 xl:w-60 -right-5  bottom-0 rounded absolute" />
              <img src={heroImg2} className="w-40 lg:w-40 xl:w-60 -left-5 top-0 rounded absolute" />
            </div>
        </motion.div>

        
      </div>

    </div>





    <div className="bg-gradient-to-bl from-slate-100 overflow-hidden  to-white mt-4 py-5  ">


    <div transition={{duration:10, repeat:Infinity}} className="  flex flex-row justify-center gap-x-16">

          <img className={imgClass} src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Roshn_Logo.svg/1920px-Roshn_Logo.svg.png" />
          <img className={imgClass} src="https://identity.ksu.edu.sa/sites/identity.ksu.edu.sa/files/imce_images/ksu_shieldlogo_colour_rgb.png" />
          <img className={imgClass} src="https://hackathon.sidf.gov.sa/_next/image?url=https%3A%2F%2Fsidf-assets.oss-me-central-1.aliyuncs.com%2Ffooter_1.png&w=1080&q=75" />


  
      </div>


    </div>

    


    <div className="px-[5%] md:px-[10%] lg:px-[20%] mb-5 text-black ">

      <div className="mt-20">
          <div className="grid gap-y-10 lg:grid-cols-2">
              <div className="flex justify-center">

                <h1 className="text-5xl text-black text-nowrap relative w-min ">
                <span className="relative">
                  <motion.span initial={{x: 100}} whileInView={{x:0}} transition={{duration:1.5}} className="bg-gradient-to-tr from-ftcpallete-60 to-ftcpallete-90 w-full  h-2 absolute bottom-4 rounded-full -z-10"></motion.span>
                  عن النادي
                </span>
                </h1>

              </div>

              <div>
                <p className="text-lg xl:text-lg p-2 xl:p-5 text-slate-700 text-right">تقنية المستقبل هو أحد الأندية الطلابية في كلية علوم الحاسب والمعلومات بجامعة الملك سعود.‏هو مقر للإبداع التقني ومصدر لبث المعرفة التقنية في المملكة.
                ينظم ويشرف نادي تقنية المستقبل على فعاليات تقنية مختلفة داخل وخارج الجامعة بهدف الارتقاء بالمجتمع الطلابي في الجامعة والمجتمع التقني في المملكة ككُل</p>
              </div>
          </div>
      </div>

      <div className="mt-20 grid lg:grid-cols-2">

        <div className="">

          <div className="flex flex-col items-center">
            <div className="py-1"> <BsEye className="bg-teal-200 text-teal-500 w-16 h-16 rounded-full p-4" /></div>
            <h1 className="mt-4 text-2xl">رؤيتنا</h1>
            <p className="px-20 text-slate-700 mt-2">خلق بيئة ملهمة وتطويرية لرفع الوعي التقني والمهني لدى المجتمع في المملكة العربية السعودية
            المساهمة الفعالة في تطوير وتكوين بيئة تساهم في رفع مستوى المهتمين في شتى المجالات التقنية المستهدفة</p>
          </div>

          

        </div>

        
        <div className="">

          <div className="flex flex-col items-center">
            <div className="py-1"> <BiMessageDots className="bg-ftcpallete-80 text-ftcpallete-50 w-16 h-16 rounded-full p-4" /></div>
            <h1 className="mt-4 text-2xl">رسالتنا</h1>
            <p className="px-20 text-slate-700 mt-2">المساهمة في رفع الكفاءة وزيادة الوعي الطلابي لمواكبة التطور التقني. وذلك من خلال إقامة الفعاليات والبرامج التي تساهم في تطوير المهارات الذاتية والعلمية والمهنية نحو تحقيق رؤية المملكة 2030</p>
          </div>

          

        </div>


      </div>

      <div className="mt-20">
          <div className="flex flex-cols lg:flex-row">
            <div className="flex justify-center">

              <h1 className="text-5xl text-black text-nowrap relative w-min ">
              <span className="relative">
                <motion.span initial={{x: 100}} whileInView={{x:0}} transition={{duration:1.5}} className="bg-gradient-to-tr from-ftcpallete-60 to-ftcpallete-90 w-full  h-2 absolute bottom-4 rounded-full -z-10"></motion.span>
                من النادي
              </span>
              </h1>

            </div>

          </div>
      </div>

      </div>


    </div>
    </>
    
    /*<div className="flex flex-col justify-start gap-y-10  overflow-x-hidden animate-fade-down animate-once animate-ease-linear">
      <SocialIcons />
      <div>
        <div className="w-full text-center text-3xl my-4">
          معرفة • تقنية • ابداع
        </div>
      </div>
      <div>
        <Pannel />
      </div>
      <SocialMedia />
      <About />
      
    </div>
    */
  );
}

export default Home;
