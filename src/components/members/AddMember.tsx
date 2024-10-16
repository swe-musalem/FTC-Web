import { useState } from "react";
import * as React from 'react';

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
import { useToast } from "@/hooks/use-toast";
import { PiUserPlusLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import img from "../../assets/FTCFocusedPrimary.png";

export default function AddMember({ members, setMembers }) {
  const { toast } = useToast();

  // Step 1: Add states for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [collageId, setCollageId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  // Step 2: Check if the form is valid
  const isFormValid =
    name && email && phoneNumber && collageId.length === 9 && password;

  // Step 3: Handle form submission and add the new member to the members array
  const handleSubmit = async () => {
    if (isLoading || !isFormValid) return; // Prevent multiple submissions and invalid submissions

    setIsLoading(true);

    const newMember = {
      name,
      email,
      phone_number: phoneNumber,
      college_id: collageId,
      password,
      points: 0,
      avatar: "",
    };

    try {
      const response = await fetch("https://ftc-api-1.onrender.com/members/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMember),
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      setMembers((prev) => [...prev, newMember]);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCollageId("");
      setPassword("");
      toast({
        title: `تم اضافة ${name}`,
        description: "يمكن للعضو الان الدخول بإستخدام التطبيق",
        className: "font-Cairo text-right text-gray-500 border border-ftcpallete-60",
        action: <img src={img} className="w-20 h-20 rounded-lg" />,
      });
    } catch (error) {
      console.error("Failed to create the member:", error);
      toast({
        title: "خطأ في الشبكة",
        description: "لم يتم إضافة العضو بنجاح.",
        className: "font-Cairo text-right text-red-500 border border-red-400",
      });
    }
    setIsLoading(false);
    setOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild onClick={() => setOpen(!open)}>
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
              maxLength={10} // Limits the input length to 10
            />
            <Label htmlFor="collageId" className="text-left font-Cairo whitespace-nowrap">
              الرقم الجامعي
            </Label>
          </div>
          {/* Character Counter for College ID */}
          <div className="text-right text-sm font-Cairo text-gray-600">
            {collageId.length}/9
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
          <DialogClose disabled={isLoading} onClick={() => isFormValid && setOpen(false)}>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="font-Cairo bg-ftcpallete-40 hover:bg-ftcpallete-60"
              disabled={!isFormValid || isLoading} // Disable the button if the form is not valid
            >
              حفظ
              {isLoading && <CgSpinner className="animate-spin" />}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
