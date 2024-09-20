
import * as React from 'react';
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { CgSpinner } from 'react-icons/cg';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EditMember({member}) {
    const [name, setName] = useState(member.name);
    const [email, setEmail] = useState(member.email);
    const [phoneNumber, setPhoneNumber] = useState(member.phone_number);
    const [collageId, setCollageId] = useState(member.college_id);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState(member.password); 
  return (
    <Dialog>
      <DialogTrigger asChild className='w-full h-full border-0 font-Cairo'>
        <Button variant="outline">
            عرض المعلومات
            <CiEdit size={25} className='text-ftc-primary'/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-right mt-4 font-Cairo">تعديل معلومات العضو</DialogTitle>
          <DialogDescription className="text-right font-Cairo">
            عدل معلومات العضو ثم اضغط على زر الحفظ
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
              onClick={null}
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
  )
}
