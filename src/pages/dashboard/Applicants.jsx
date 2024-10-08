import { useEffect, useState } from "react"
import useLocalStorageState from 'use-local-storage-state';
import ApplicationSwitch from "../../components/ApplicationSwitch";
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
    Text,
    DonutChart,
  } from "@tremor/react";

  import { Modal, Textarea } from 'flowbite-react';


import Button from "../../components/Button";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import MoonLoader from "react-spinners/ClipLoader";



import PopUp from "../../components/PopUp";
import useApplicantsData from "../../utils/useApplicantsData";

function Applicants() {

    

  const {data,
    isLoading,
    handleAccept,
    iDStatusChanging,
    handleReject,
    isStatusChanging,
    statusFilter,
    setStatusFilter,} = useApplicantsData()
    
  const status = {
    pending : 'bg-ftc-lightyellow text-ftc-yellow',
    rejected : 'bg-ftc-lightred text-ftc-red',
    accepted : 'bg-ftc-lightgreen text-ftc-green'
  }


  const major = {
    SWE : 'bg-[#D9CEED] text-[#6535BB]',
    CEN : 'bg-[#CEE1ED] text-[#1395EA]',
    IS : 'bg-[#A6E8ED] text-[#006971]',
    CS:'bg-[#CEE2ED] text-[#00639B]'
  }

  const statusToArabic = {
    accepted:'مقبول',
    rejected:'مرفوض',
    pending:'بالانتظار',
  }
  
  const [show, setShow] = useState(false);
  const [text, setText] = useLocalStorageState('whatsupMsg')

  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');

 const handleSearchChangeCollageId = (e)=>{
    setSearchId(String(e.target.value))
 }
 const handleSearchChangeName = (e)=>{
    setSearchName(e.target.value)
 }


 const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    
};
 


    return <div className="bg-ftc-gray w-full px-20 py-10 overflow-y-auto h-full pt-[10%]" >
        <Modal show={show} onClose={()=>{setShow(false)}} >
            <Modal.Header/>
            <div className="h-screen px-4 py-10 font-Cairo" dir="rtl">
                <div>رسالة الواتس اب</div>
                <textarea type="text" onChange={(e)=>{setText(e.target.value)}} value={text} className="bg-ftc-gray w-full h-1/2" />
            </div>
            <Button primary className='m-4' onClick={()=>{setShow(false)}}>
                حفظ
            </Button>
        </Modal>
        <div>
            <div className="text-3xl mb-4 flex items-center gap-x-2">
                <div>المتقدمين</div>
                <MdOutlineSettings onClick={()=>{setShow(true)}}/>
            </div>
            <ApplicationSwitch/>
        </div>
        <div className={`flex flex-col lg:flex-row gap-x-4 items-start h-5/6  ${isLoading && 'animate-pulse'}`}>
                <Card className="md:w-full h-3/4 overflow-y-auto">
                    <div className=" flex gap-x-2">
                        <input placeholder={` 🔍 البحث بالرقم الجامعي`  } value={searchId} type="number" onChange={handleSearchChangeCollageId} className="rounded-md border focus:ring-1 border-slate-300 focus:outline-none placeholder:italic placeholder:text-slate-400" />
                        <input placeholder={` 🔍 البحث بالاسم`  } value={searchName} onChange={handleSearchChangeName} className="rounded-md border focus:ring-1 border-slate-300 focus:outline-none placeholder:italic placeholder:text-slate-400 px-2" />
                        <select id="select" value={statusFilter} onChange={handleStatusFilterChange} className="rounded-md hover:bg-ftc-gray border focus:ring-0 focus:ring-ftc-primary text-ftc-smoke border-slate-300 focus:outline-0">
                            <option hidden>الحالة</option>
                            <option value="all" className="hover:bg-ftc-primary">الكل</option>
                            <option value="rejected">المرفوضين</option>
                            <option value="accepted">المقبولين</option>
                            <option value="pending">الانتظار</option>
                        </select>
                    </div>
                    <Table >
                    <TableHead >
                        <TableRow >
                        <TableHeaderCell>الاسم</TableHeaderCell>
                        <TableHeaderCell>الرقم الجامعي</TableHeaderCell>
                        <TableHeaderCell>التخصص</TableHeaderCell>
                        <TableHeaderCell>الملف التعريفي</TableHeaderCell>
                        <TableHeaderCell> الحالة </TableHeaderCell>
                        <TableHeaderCell>مقبول ؟</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data
                    .filter(item => item.status === statusFilter || statusFilter === "all")
                    .filter(item => searchId ? String(item.college_id).startsWith(searchId) : true)
                    .filter(item => item.name.includes(searchName))
                    .map((item) => (
                        <TableRow key={item.id} className="odd:bg-ftc-gray transition duration-300 ease-in-out hover:scale-[99%]">
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.college_id}</TableCell>
                        <TableCell>
                            <Badge className={major[item.major]+ ' w-20 h-5 rounded-[5px]'}>
                            {item.major}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <Text>
                            <PopUp details={item} />
                            </Text>
                        </TableCell>
                        <TableCell>
                            <Badge className={`${status[item.status]} w-20`}>
                            {iDStatusChanging === item.id ? <MoonLoader color="white" size={20}/> : statusToArabic[item.status] }
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-row-reverse items-center gap-x-4 ">
                            <Button disabled={isStatusChanging || item.status === 'rejected'} className="bg-[#FFDEDE] p-2 rounded-lg  drop-shadow-none" onClick={()=>handleReject(item.id)}>
                                <RxCross2 className="text-[#F14C4C] text-xl"/>
                            </Button>
                            <Button disabled={isStatusChanging || item.status === 'accepted'} className="bg-[#DEFFF9] p-2 rounded-lg  drop-shadow-none" onClick={()=>handleAccept(item.id)}>
                                <IoMdCheckmark className="text-[#12CA9E] text-xl"/>
                            </Button>
                            </div>
                        </TableCell>
                        </TableRow>
                    ))
                    }
                    </TableBody>
                    </Table>
                   
                </Card>
                
        </div>
        
       
       
    </div>
}

export default Applicants