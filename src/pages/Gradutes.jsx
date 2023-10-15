import { useEffect } from "react";
import GraduetsCard from "../components/GraduatesCard";
import musalem from "../assets/graduets/musallam.jpg";
import s1 from "../assets/graduets/RayanL.jpg";
import s2 from "../assets/graduets/Nawaf Khalifah.jpeg";
import s3 from "../assets/graduets/Abdulaziz AlShimali.jpeg";
import s4 from "../assets/graduets/Osama.jpeg";
import s5 from "../assets/graduets/Omer Nassar.jpeg";
import s6 from "../assets/graduets/Faisal alowaisi.jpeg";
import s7 from "../assets/graduets/DSC_8317.jpeg";
import s8 from "../assets/graduets/abdullah ginayh.jpeg";
import s9 from "../assets/graduets/Abdulrahman Aldokhayel.jpeg";
import s10 from "../assets/graduets/Abdullah Al-hejji.png";

import { RxDividerHorizontal } from "react-icons/rx";

const students = [
  {
    name: "ريان لٌبّد",
    img: s1,
    skills: "Mobile developer, web developer, machine learning",
    gradDate: "2023",
    linkedin: "https://www.linkedin.com/in/lubbadrayan/",
    twitter: "https://twitter.com/LubbadRayan",
  },
  {
    name: "نواف محمد الخليفه",
    img: s2,
    skills: "Mobile developer, web developer, UI/UX",
    gradDate: "2018",
    linkedin: "https://www.linkedin.com/in/nawafinity/",
    twitter: "https://twitter.com/nawafinity",
  },
  {
    name: "Abdulaziz Alshimali",
    img: s3,
    skills: "UX Designer",
    gradDate: "2022",
    linkedin: "https://www.linkedin.com/in/abdulaziz-alshimali/",
    twitter: "",
  },
  {
    name: "أسامة الفيفي",
    img: s4,
    skills: "machine learning, data analysis, AI",
    gradDate: "2019",
    linkedin: "https://www.linkedin.com/in/osama-alfaifi",
    twitter: "https://x.com/oalfaify?s=21&t=0PwVtNAefIlcUN94Uae8lw",
  },
  {
    name: "عمر نصار",
    img: s5,
    skills: "web developer",
    gradDate: "2023",
    linkedin: "https://www.linkedin.com/in/omarbnassar",
    twitter: "",
  },
  {
    name: "فيصل العويسي",
    img: s6,
    skills: "Backend Developer",
    gradDate: "2019",
    linkedin: "https://www.linkedin.com/in/faisal-alowaisi-4b059a150",
    twitter: "https://twitter.com/Faisal_3397",
  },
  {
    name: "عبدالرحمن السنيدي",
    img: s7,
    skills: "web developer",
    gradDate: "2019",
    linkedin:
      "https://sa.linkedin.com/in/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86-%D8%A7%D9%84%D8%B3%D9%86%D9%8A%D8%AF%D9%8A-abdulrhman-alsunidi-451284134",
    twitter: "",
  },
  {
    name: "عبدالله القنية",
    img: s8,
    skills: "Product manager ",
    gradDate: "2020",
    linkedin: "https://www.linkedin.com/in/abdullahqinayh",
    twitter: "",
  },
  {
    name: "عبدالرحمن الدخيّل",
    img: s9,
    skills: "machine learning, data analysis, AI",
    gradDate: "2016",
    linkedin: "https://www.linkedin.com/in/aldokhayel",
    twitter: "",
  },
  {
    name: "عبدالله الحجي",
    img: s10,
    skills: "game developer, Project management, Business development",
    gradDate: "2019",
    linkedin: "https://www.linkedin.com/in/abdullah-alhejji97",
    twitter: "https://twitter.com/al7jy97",
  },
];

function Gradutes({ title }) {
  useEffect(() => {
    document.title = title;

    return () => null;
  }, []);

  return (
    <div className="flex flex-col items-center text-center  animate-fade-down animate-once animate-ease-linear">
      <div className="py-20">
        <div className="text-2xl">خريجو النادي </div>
        <RxDividerHorizontal className="text-3xl mx-auto" />
        <div>تعرف على خريجي نادي تقنية المستقبل بمختلف المجالات التقنية </div>
      </div>
      <div className=" flex flex-wrap justify-center sm:gap-x-6 gap-x-4 gap-y-5 bg-white w-full sm:px-44 py-10 px-2 sm:py-10 ">
        {students.map((student) => {
          return (
            <GraduetsCard
              img={student.img}
              name={student.name}
              skills={student.skills}
              gradDate={student.gradDate}
              linkedin={student.linkedin}
              twitter={student.twitter}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gradutes;
