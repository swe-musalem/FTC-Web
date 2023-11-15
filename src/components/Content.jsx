import React from "react";
import { MdGroups, MdChat, MdMailOutline } from "react-icons/md";

function Content({ date, title, name, type ,...rest}) {
  let icon = <div></div>;
  switch (type) {
    case "events":
      icon = (
        <div className="flex flex-col items-center rounded-lg p-4  m-2 bg-ftcpallete-95">
          <MdGroups size="3rem" className="" color="#6535BB" />
          <div className="text-center text-ftc-primary"> فعالية </div>
        </div>
      );
      break;
    case "scaleup":
      icon = (
        <div className="flex flex-col items-center rounded-lg p-4 m-2 bg-ftcpallete-95">
          <MdMailOutline size="3rem" className="" color="#6535BB" />
          <div className="text-center text-ftc-primary"> سكيل اب </div>
        </div>
      );
      break;
    case "blog":
      icon = (
        <div className="flex flex-col items-center rounded-lg p-4 m-2 bg-ftcpallete-95">
          <MdChat size="3rem" className="" color="#6535BB" />
          <div className="text-center text-ftc-primary"> مشاركة </div>
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <div className="my-4 font-Cairo text-black w-96 animate-fade-down animate-once animate-ease-linear" {...rest} style={{ direction: "rtl" }}>
      <div className="container flex flex-row ">
        {icon}
        <div className="flex flex-col justify-center gap-y-2  mr-3">
          <div>
            <h2>{title}</h2>
          </div>
          <div>{name}</div>
          <div className="text-gray-400"> {date} </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
