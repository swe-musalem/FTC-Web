import React from "react";
import { MdGroups, MdChat, MdMailOutline } from "react-icons/md";

function Content({ date, title, name, type }) {
  let icon = <div></div>;
  switch (type) {
    case "event":
      icon = (
        <div className="flex flex-col rounded-lg p-4 m-2 bg-ftcpallete-95">
          <MdGroups size="3rem" className="" color="#6535BB" />
          <div className="text-center text-primary"> فعالية </div>
        </div>
      );
      break;
    case "mail":
      icon = (
        <div className="flex flex-col rounded-lg p-4 m-2 bg-ftcpallete-95">
          <MdMailOutline size="3rem" className="" color="#6535BB" />
          <div className="text-center text-primary"> اعلان </div>
        </div>
      );
      break;
    case "e":
      icon = (
        <div className="flex flex-col rounded-lg p-4 m-2 bg-ftcpallete-95">
          <MdChat size="3rem" className="" color="#6535BB" />
          <div className="text-center text-primary"> مشاركة </div>
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <div className="my-4 font-Cairo text-black " style={{ direction: "rtl" }}>
      <div className="container flex flex-row ">
        {icon}
        <div className="flex flex-col justify-center gap-3 mr-3">
          <div className="text-gray-400"> {date} </div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
