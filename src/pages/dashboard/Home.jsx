import { useEffect } from "react"
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

function Home() {


    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    const data = [
        {
          name: "Viola Amherd",
          Role: "Federal Councillor",
          departement: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
          status: "active",
        },
        {
          name: "Simonetta Sommaruga",
          Role: "Federal Councillor",
          departement:
            "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
          status: "active",
        },
        {
          name: "Alain Berset",
          Role: "Federal Councillor",
          departement: "The Federal Department of Home Affairs (FDHA)",
          status: "active",
        },
        {
          name: "Ignazio Cassis",
          Role: "Federal Councillor",
          departement: "The Federal Department of Foreign Affairs (FDFA)",
          status: "active",
        },
        {
          name: "Karin Keller-Sutter",
          Role: "Federal Councillor",
          departement: "The Federal Department of Finance (FDF)",
          status: "active",
        },
        {
          name: "Guy Parmelin",
          Role: "Federal Councillor",
          departement: "The Federal Department of Economic Affairs, Education and Research (EAER)",
          status: "active",
        },
        {
          name: "Elisabdesdth Baume-Schneider",
          Role: "Federal Councillor",
          departement: "The Federal Department of Justice and Police (FDJP)",
          status: "active",
        },
        {
          name: "Elisabethdsa Baume-Schneider",
          Role: "Federal Councillor",
          departement: "The Federal Department of Justice and Police (FDJP)",
          status: "active",
        },
        {
          name: "Elisabethds Baume-Schneider",
          Role: "Federal Councillor",
          departement: "The Federal Department of Justice and Police (FDJP)",
          status: "active",
        },
      ];


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



    return <div className="bg-ftc-gray w-full p-24 overflow-y-auto" >
        <div className="text-3xl mb-4">المتقدمين</div>
        <div className="flex justify-around items-start h-full">
                <Card className="sm:w-3/5 h-3/4 overflow-y-auto">
                    <Table >
                    <TableHead>
                        <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        
                        <TableHeaderCell>Status</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                            <Text>{item.Role}</Text>
                            </TableCell>
                            <TableCell>
                            <Badge color="emerald" >
                                {item.status}
                            </Badge>
                            </TableCell>
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