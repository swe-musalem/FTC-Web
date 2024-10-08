import React, { useEffect, useState } from 'react'
import {DataTable} from '../../components/members/table/data-table'
import img from '../../assets/FTCFocusedPrimary.png'

// import { ColumnDef } from "@tanstack/react-table"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import AddMember from '../../components/members/AddMember'
  import { FaUserTimes } from "react-icons/fa";
  import { IoMdCheckmark } from "react-icons/io";


  import { Button } from "@/components/ui/button"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { MoreHorizontal } from "lucide-react"

import { Input } from "@/components/ui/input"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover";
import { useToast } from "@/hooks/use-toast"
import EditMember from '../../components/members/EditMember'

export default function Members() {


  const {toast} = useToast();

    const [members, setMembers] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetchMembers();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const fetchMembers = async () => {
      try {
          const response = await fetch('https://ftc-api-1.onrender.com/members');
          if (!response.ok) {
              throw new Error('Failed to fetch members');
          }
          const data = await response.json();
          setMembers(data); // Assuming the API returns an array of members
      } catch (error) {
          console.error('Error fetching members:', error);
          toast({
              title: "Error",
              description: "Unable to load members data.",
              status: "error",
              duration: 5000,
              isClosable: true,
          });
      }
      setIsLoading(false)
    };
    

    const handleDelete = async (email)=>{
      try {
        const response = await fetch(`https://ftc-api-1.onrender.com/members/delete/${email}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add your authentication headers here if necessary
          },
        });
        if (!response.ok) {
          throw new Error('Failed to delete the member');
        }
        // Update state to reflect the deletion
        setMembers(members.filter(member => member.email !== email));
        toast({
          title: "تم حذف العضو",
          className:'font-Cairo border border-red-300',
          
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "There was an error deleting the member.",
        });
      }
    }


    const handlePoints =  async (points,email)=>{
        try {
            const response = await fetch(`https://ftc-api-1.onrender.com/members/${email}/points/${points}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    // Include authentication headers if needed
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }

            const data = await response.json();
            const newMembers = members.map((member)=>{
              if (member.email === email) {
                  return {...member,points:points}
              }
              else return member
          })
          setMembers(newMembers)
          toast({
                description: "تم تحديث نقاط العضو بنجاح",
                duration: 2000,
                className:'font-Cairo',
                isClosable: true,
            });

        } catch (error) {
            console.error('Failed to update points:', error);
            toast({
                title: "Error",
                description: "Failed to update points.",
                status: "error",
                className:'font-Cairo',
                duration: 5000,
                isClosable: true,
            });
        }

      
    }
  

 const columns = [
    {
      accessorKey: "avatar",
      header: () => <div className="text-right">الصورة</div>,
      cell: ({ row }) => {
        return <Avatar>
        <AvatarImage src={img} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      },
    },
    {
      accessorKey: "name",
      header: () => <div className="text-right">الأسم</div>,
      cell: ({ row }) => {
        const rowValue = row.getValue('name') 
        return <div className="text-right font-medium">{rowValue}</div>
      },
    },
    {
      accessorKey: "email",
      header: ()=> <div className="text-right">البريد الالكتروني</div>,
    },
    {
      accessorKey: "role",
      header:()=><div className="text-right">الدور</div>,
    },
    {
      accessorKey: "points",
      header:()=><div className="text-right">النقاط</div>,
      cell:({row})=>{
            const [points, setPoints] = useState(row.getValue('points'))
            // the state below is set when confirming the final points
            const [visiblePoints, setVisiblePoints] = useState(row.getValue('points'))
          return <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">{visiblePoints}</Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none font-Cairo text-right">تعديل النقاط</h4>
              <p className="text-sm text-muted-foreground flex gap-x-2">
                <PopoverClose>
                  <Button variant="outline" 
                    onClick={()=>{
                        handlePoints(points,row.getValue('email'))
                        setVisiblePoints(points)
                    }}
                  >
                    <IoMdCheckmark/>
                  </Button>
                </PopoverClose>
                <Input 
                    defaultValue={points} 
                    className="focus:outline-none outline-none" 
                    onChange={(e)=>{setPoints(e.target.value)}}
                    />
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      }
    },
    {
      accessorKey: "actions",
      header:'',
      cell:({ row }) => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <EditMember member={row.original}/> 
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                    className="flex gap-x-2"
                    onClick={()=>{
                        handleDelete(row.getValue('email'))
                    }}>
                    <h3 className="text-red-500 font-Cairo text-right w-full">حذف</h3>
                    <FaUserTimes className="text-red-500" size={25}/>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },

    },
    {
      accessorKey:'this is just to add space',
      header:''
    }
  ]

  
  
      
  return (
    <div className='bg-ftc-gray h-screen w-full flex justify-center items-center pt-[10%]'>
        <div className='bg-ftc-surface h-[95%] w-[95%] rounded-xl shadow-xl p-4 overflow-y-scroll '>
            <AddMember members={members} setMembers={setMembers}/>
            {
              isLoading ?  
              <div className='h-full animate-pulse'></div> 
              :
              <DataTable data={members} columns={columns} />
            }
        </div>
    </div>
  )
}
