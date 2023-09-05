import { FaUsers } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import Number from "./Number";

function SocialMedia(params) {
  const style = "flex flex-col items-center text-center";
  const logoStyle = "text-[4rem] bg-opacity-10 bg-surface p-2 rounded-[6px]";
  const numberStyle = "text-2xl";

  return (
    <div className="flex justify-around md:justify-center md:gap-x-8 w-full ">
      <div className={style}>
        <FaUsers className={logoStyle} />
        <div className={numberStyle}>
          +<Number n={1600} />
        </div>
        <div>عدد مستفيدين الفعاليات</div>
      </div>

      <div className={style}>
        <AiFillYoutube className={logoStyle} />
        <div className={numberStyle}>
          +
          <Number n={400} />
        </div>
        <div>مشترك جديد عبر اليوتيوب</div>
      </div>

      <div className={style}>
        <BiLogoTwitter className={logoStyle} />
        <div className={numberStyle}>
          +<Number n={600} />
        </div>
        <div>متابع جديد عبر تويتر</div>
      </div>

      <div className={style}>
        <BsFillEyeFill className={logoStyle} />
        <div className={numberStyle}>
          +<Number n={9000} />
        </div>
        <div> عدد مشاهدات اليوتيوب</div>
      </div>
    </div>
  );
}

export default SocialMedia;
