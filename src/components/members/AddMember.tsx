import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast"
import { PiUserPlusLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";

import * as React from 'react';


export default function AddMember({ members, setMembers }) {
  const { toast } = useToast()

  // Step 1: Add states for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [collageId, setCollageId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState(""); 

  const [open, setOpen] = useState(false)

  // Step 2: Handle form submission and add the new member to the members array
  const handleSubmit = async () => {
    if (isLoading) return;  // Prevent multiple submissions
  
    setIsLoading(true);
  
    const newMember = {
      name,
      email,
      phone_number: phoneNumber,
      college_id:collageId,
      password,
      points: 0,
      avatar: "",
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/members/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMember),
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
    
      setMembers(prev => [...prev, newMember]);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCollageId("");
      setPassword("");
      toast({
        title: `تم اضافة ${name}`,
        description: "يمكن للعضو الان الدخول بإستخدام التطبيق",
        className: "font-Cairo text-right text-gray-500 border border-ftcpallete-60",
        action: <img src='https://pbs.twimg.com/profile_images/1824145399722000385/n9GjKc9U_400x400.jpg' className='w-20 h-20 rounded-lg' />
      });
    } catch (error) {
      console.error('Failed to create the member:', error);
      toast({
        title: "خطأ في الشبكة",
        description: "لم يتم إضافة العضو بنجاح.",
        className: "font-Cairo text-right text-red-500 border border-red-400",
      });
    }
    setIsLoading(false);
    setOpen(false)
    console.log('excution finished')
  };


  
  

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={()=>setOpen(true)}>
        <Button
          variant="outline"
          className="flex gap-x-2 my-2 text-ftcpallete-60 hover:text-ftcpallete-80"
        >
          <PiUserPlusLight size={25} />
          <p>مستخدم</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-right mt-4 font-Cairo">اضافة عضو</DialogTitle>
          <DialogDescription className="text-right font-Cairo">
            أضف معلومات العضو ثم اضغط على زر الحفظ
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 text-right font-Cairo"
            />
            <Label htmlFor="name" className="text-left font-Cairo">
              الأسم
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3 text-right"
            />
            <Label htmlFor="email" className="text-left font-Cairo whitespace-nowrap">
              البريد الألكتروني
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="col-span-3 text-right"
            />
            <Label htmlFor="phoneNumber" className="text-left font-Cairo whitespace-nowrap">
              رقم الجوال
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="collageId"
              value={collageId}
              onChange={(e) => setCollageId(e.target.value)}
              className="col-span-3 text-right"
            />
            <Label htmlFor="collageId" className="text-left font-Cairo whitespace-nowrap">
              الرقم الجامعي
            </Label>
          </div>
          {/* New Password Field */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3 text-right"
            />
            <Label htmlFor="password" className="text-left font-Cairo whitespace-nowrap">
              كلمة المرور
            </Label>
          </div>
        </div>
        <DialogFooter dir="rtl">
          <DialogClose disabled={isLoading}>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="font-Cairo bg-ftcpallete-40 hover:bg-ftcpallete-60"
              disabled={isLoading}
            >
              حفظ
              {isLoading && <CgSpinner className='animate-spin'/>}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
