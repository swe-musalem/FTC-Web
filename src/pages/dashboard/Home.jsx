import { useEffect, useState } from "react"
import {
    Table,
    TableHead,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
    Card,
    Title,
    Badge,
  } from "@tremor/react";

import { FaRegClock } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

import DonutChartComponent from "../../components/DonutChartComponent";

import { Link } from "react-router-dom";


import useApplicantsData from "../../utils/useApplicantsData";

function Home() {


  const {data,countData,isLoading} = useApplicantsData()
  const status = {
    pending : 'bg-ftc-lightyellow text-ftc-yellow',
    rejected : 'bg-ftc-lightred text-ftc-red',
    accepted : 'bg-ftc-lightgreen text-ftc-green'
  }

  const statusToArabic = {
    accepted:'مقبول',
    rejected:'مرفوض',
    pending:'بالانتظار',
  }

    return <div className="bg-ftc-gray w-full px-20 py-10 h-screen overflow-y-auto" >
        <div className="text-3xl mb-4">المتقدمين</div>
        <div className={`flex flex-col lg:flex-row gap-x-4  items-start h-screen  ${isLoading && 'animate-pulse h-screen'}`}>
                <Card className="md:w-full h-3/4 my-4 overflow-y-auto ">
                    <Table >
                    <TableHead>
                        <TableRow>
                        <TableHeaderCell>الاسم</TableHeaderCell>
                        <TableHeaderCell>الحالة</TableHeaderCell>
                        <TableHeaderCell>الرقم الجامعي</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            
                            <TableCell>
                            <Badge className={status[item.status]}>
                                {statusToArabic[item.status]}
                            </Badge>
                            </TableCell>
                            <TableCell>{item.college_id}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                    <Title className="w-full underline  text-center">
                        <Link>
                            الاطلاع على جميع المتقدمين 
                        </Link>
                    </Title>
                </Card>
                <div className="w-72 p-0 rounded-t-3xl  bg-white text-ftc-smoke">
                    <div className="bg-ftc-primary p-4 w-full text-center text-white text-2xl rounded-3xl">المتقدمين</div>
                    <div className="px-4 py-4 flex flex-col gap-y-2 h-48 divide-y ">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2 py-2">
                            <FaRegClock size={35} className="bg-ftc-lightyellow text-ftc-yellow p-2 rounded-md"/>
                            <div>ينتظرون</div>
                        </div>
                        <div>{countData.pending}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2 py-2">
                            <RxCross1 size={35} className="bg-ftc-lightred text-ftc-red p-2 rounded-md"/>
                            <div>انرفضوا</div>
                        </div>
                        <div>{countData.rejected}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2 py-2">
                            <IoMdCheckmark size={35} className="bg-ftc-lightgreen text-ftc-green p-2 rounded-md"/>
                            <div>انقبلوا</div>
                        </div>
                        <div>{countData.accepted}</div>
                      </div>
                    </div>
                </div>
        </div>
        <div>
          <div className="text-3xl mt-8 mb-4 text-ftc-coal">الاحصائيات</div>
          <DonutChartComponent />
        </div>
       
       
    </div>
}

export default Home