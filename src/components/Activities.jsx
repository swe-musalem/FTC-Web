import React from "react";
import Content from "./Content";
import Button from "./Button";

function Activites() {
    const date = "٢٠٢٢ ، ٢٥ فبراير";
    const title = "ورشة عمل تحليل البيانات";
    const name = "مهند الرشيد";
    return (
      <div className="bg-surface w-full  p-4 flex flex-col ">
        <div className="text-primary text-center text-2xl">
          الاحداث والفعاليات
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center m-10 mx-10 ">
          <Content date={date} title={title} name={name} type="event" />
          <Content date={date} title={title} name={name} type="mail" />
          <Content date={date} title={title} name={name} type="e" />
          <Content date={date} title={title} name={name} type="e" />
          <Content date={date} title={title} name={name} type="e" />
          <Content date={date} title={title} name={name} type="e" />
          <Content date={date} title={title} name={name} type="e" />
          <Content date={date} title={title} name={name} type="event" />
          <Content date={date} title={title} name={name} type="mail" />
          <Content date={date} title={title} name={name} type="e" />
          <Content date={date} title={title} name={name} type="e" />
          <Content date={date} title={title} name={name} type="e" />
        </div>
        <div className="flex flex-row justify-center mb-3">
          <Button className="w-1/3 bg-primary text-surface " surface>
            عرض المزيد
          </Button>
        </div>
      </div>
    );
}


export default Activites