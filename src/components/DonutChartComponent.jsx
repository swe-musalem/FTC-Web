import { Card, DonutChart, Title, Legend } from "@tremor/react";
import useApplicantsData from "../utils/useApplicantsData";
export default function DonutChartComponent(){
  const {majorCount,isLoading} = useApplicantsData()

  const SWENumber = majorCount.SWE
  const cities = [
    {
      major: "SWE",
      sales: majorCount.SWE,
    },
    {
      major: "CS",
      sales: majorCount.CS,
    },
    {
      major: "CEN",
      sales: majorCount.CEN,
    },
    {
      major: "IS",
      sales: majorCount.IS,
    },
    
  ];
  return <Card className="max-w-lg text-right">
          <Title>تخصصات المتقدمين</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="major"
            colors={["blue", "violet", "cyan", "rose"]}
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-row-reverse justify-center gap-x-2 items-center">
                <div>CEN</div>
                <div className="w-3 h-3 rounded-full bg-[#06B6D4]"></div>
              </div>
              <div>{majorCount.CEN}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row-reverse justify-center gap-x-2 items-center">
                <div>SWE</div>
                <div className="w-3 h-3 rounded-full bg-[#3F83F8]"></div>
              </div>
              <div>{majorCount.SWE}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row-reverse justify-center gap-x-2 items-center">
                <div>CS</div>
                <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
              </div>
              <div>{majorCount.CS}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row-reverse justify-center gap-x-2 items-center">
                <div>IS</div>
                <div className="w-3 h-3 rounded-full bg-[#F43F5E]"></div>
              </div>
              <div>{majorCount.IS}</div>
            </div>
          </div>
        </Card>
}