import Pannel from "../components/Pannel";
import SocialMedia from "../components/SocialMedia";
import Activites from "../components/Activities";
import SocialIcons from "../components/SocialIcons";
import About from "./About";
import { useEffect } from "react";


function Home({title}) {
  useEffect(() => {
    document.title = title
  
    return () => null }, [])
    
  return (
    <div className="flex flex-col justify-start gap-y-10  overflow-x-hidden animate-fade-down animate-once animate-ease-linear">
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
  );
}

export default Home;
