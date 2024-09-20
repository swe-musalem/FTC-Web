
import { ColumnDef } from "@tanstack/react-table"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  import { CiTrash } from "react-icons/ci";
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

import * as React from 'react';
import { Input } from "@/components/ui/input"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover";


// This type is used to define the shape of our data.
export type Member = {
  collageId: string
  name: string
  role: string
  email: string
  phoneNumber: number
  points:number
  avatar:string
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "avatar",
    header: () => <div className="text-right">الصورة</div>,
    cell: ({ row }) => {
      return <Avatar>
      <AvatarImage src="https://i.imgflip.com/6abhrw.jpg" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-right">الأسم</div>,
    cell: ({ row }) => {
      const rowValue = row.getValue('name') as string
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
      const points = row.getValue('points') as number
      return <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{points}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none font-Cairo text-right">تعديل النقاط</h4>
            <p className="text-sm text-muted-foreground flex gap-x-2">
              <PopoverClose>
                <Button variant="outline" >
                  <IoMdCheckmark/>
                </Button>
              </PopoverClose>
              <Input defaultValue={points} className="focus:outline-none outline-none"/>
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
              <DropdownMenuItem>
                  x
              </DropdownMenuItem>
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <h3 className="text-red-500 font-Cairo text-right w-full">حذف</h3>
                  <CiTrash className="text-red-500" size={25}/>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
  },
]
