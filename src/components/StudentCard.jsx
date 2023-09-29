import React from "react";
import img from "../assets/347075029_3355296104731523_766184651654308203_n - Rayan L.jpg";
import { BsTwitter,BsLinkedin } from "react-icons/bs";
const name = "ريان لٌبّد";
const date = "2023";
const sp =
  "Mobile developer, web developer, machine learning, Entrepreneurship";
const arrSp = sp.split(",");
const twitter = "https://twitter.com/LubbadRayan";
const linkedin = "https://www.linkedin.com/in/lubbadrayan/";

function StudentCard() {
  return (
    <div className="flex flex-col m-3 border border-sky-500 w-56 rounded-lg">
      <img className="rounded-t-lg" src={img} alt="luffy" />
      <div className="text-center my-4">
        <p>
          {arrSp.map((item, index) => {
            let i = item+",";
            if (index > 1) {
              return "";
            }
            if(index === 1){
              i = item
            }
            return i;
          })}
        </p>
        <p>{name}</p>
        <p>خريج {date}</p>
      </div>
      <hr className="bg-black color-black h-px w-1/2" />
      <div className="flex justify-items-center my-2">
      {twitter !== "" && (
          <a href={twitter}>
            <BsTwitter className="color-sky"/>
          </a>
        )}
        {linkedin !== "" && (
          <a href={linkedin}>
            <BsLinkedin className="color-sky"/>
          </a>
        )}
      </div>
    </div>
  );
}

export default StudentCard;
