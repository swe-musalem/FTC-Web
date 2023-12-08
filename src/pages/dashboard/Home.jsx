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
    Text,
    DonutChart,
    Legend,
  } from "@tremor/react";

import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Home() {


  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const status = {
    pending : 'bg-ftc-lightyellow text-ftc-yellow',
    rejected : 'bg-red-400',
    accepted : 'bg-green-400'
  }

    useEffect(() => {
        const token = Cookies.get('token')
        axios.get('http://localhost:9000/applicants',{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
          setdata(res.data)
          console.log(res.data)
          setisLoading(false)
        }).catch(err => {
          console.log(err)
        }).finally(
         
        )

        return () => {
            
        };
    }, []);






      const cities = [
        {
          name: "New York",
          sales: 9800,
        },
        {
          name: "London",
          sales: 4567,
        },
        {
          name: "Hong Kong",
          sales: 3908,
        },
        {
          name: "San Francisco",
          sales: 2400,
        },
        {
          name: "Singapore",
          sales: 1908,
        },
        {
          name: "Zurich",
          sales: 1398,
        },
      ];



    return <div className="bg-ftc-gray w-full p-20 overflow-y-auto" >
        <div className="text-3xl mb-4">المتقدمين</div>
        <div className={`flex flex-col lg:flex-row gap-x-4  items-start h-screen ${isLoading && 'animate-pulse'}`}>
                <Card className="md:w-full h-3/4 overflow-y-auto">
                    <Table >
                    <TableHead>
                        <TableRow>
                        <TableHeaderCell>الاسم</TableHeaderCell>
                        <TableHeaderCell>الملف التعريفي</TableHeaderCell>
                        <TableHeaderCell>الحالة</TableHeaderCell>
                        <TableHeaderCell>الرقم الجامعي</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                            <Text><Link>التفاصيل</Link></Text>
                            </TableCell>
                            <TableCell>
                            <Badge className={status[item.status]}>
                                {item.status}
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
                <Card className="max-w-lg">
                    <Title className="text-right">تخصصات المتقدمين</Title>
                    <DonutChart
                        className="mt-6"
                        data={cities}
                        category="sales"
                        index="name"
                        
                        // valueFormatter={valueFormatter}
                        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                    />
                    <Legend
                    className="mt-3 w-full mx-auto indent-2 "
                    categories={["Active users", "Inactive users","ss"]}
                    colors={["emerald", "red"]}
                    />
                </Card>
        </div>
        <div className="text-3xl mt-4 mb-4 text-ftc-coal">الاحصائيات</div>
       
       
    </div>
}

export default Home