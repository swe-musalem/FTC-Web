import Pannel from "../components/Pannel";
import SocialMedia from "../components/SocialMedia";
import Activites from "../components/Activities";
import SocialIcons from "../components/SocialIcons";

function Home() {
  return (
    <div className="flex flex-col justify-start gap-y-10  overflow-x-hidden animate-flip-down animate-once">
      <SocialIcons />
      <div>
        <div className="w-full text-center text-3xl my-4">
          معرفة • تقنية • ابداع
        </div>
      </div>
      <Pannel />
      <SocialMedia />
      <Activites />
    </div>
  );
}

export default Home;
