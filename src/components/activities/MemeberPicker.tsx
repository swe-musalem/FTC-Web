"use client"

import * as React from "react"
import { useState,useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaRegUser } from "react-icons/fa";

export default function MemeberPicker({value,setValue}) {
  const [open, setOpen] = React.useState(false)

  const [members, setMembers] = useState([])
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
        
    }
    setIsLoading(false)
  };
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-52 justify-between"
        >
             <div className="flex gap-x-2 items-center">
                  <FaRegUser />
                  {value.name
            ? members?.find((member) => member.name === value.name)?.name
            : "اختر المسؤول"}
                </div>
          
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="اختر المسؤول" dir="rtl" className="h-9 font-Cairo shadcnTextArea my-2" />
          <CommandList>
            <CommandEmpty className="font-Cairo p-4 text-sm text-center" >لم يتم العثور عضو</CommandEmpty>
            <CommandGroup>
              {members.map((member) => (
                <CommandItem
                  key={member.id}
                  value={member.id}
                  className="font-Cairo"
                  dir="rtl"
                  onSelect={() => {
                    setValue(member === value ? "" : member)
                    setOpen(false)
                  }}
                >
                <div className="flex gap-x-2">
                  <FaRegUser />
                  {member.name}
                </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
