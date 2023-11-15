import Input from "../components/Input"
import { useState } from "react"
import DropDown from '../components/DropDown'
import Button from "../components/Button";

import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import { useForm,  } from "react-hook-form"

function Apply() {


    

    const [major, setMajor] = useState('');
    console.log(major)
    const majorOptions = [
        {
            label:'هندسة البرمجيات',
            dbvalue:'swe'
        },
        {
            label:'نظم المعلومات',
            dbvalue:'IS'
        },
        {
            label:'هندسة الحاسب',
            dbvalue:'CEN'
        },
        {
            label:'علوم الحاسب',
            dbvalue:'CS'
        },
    ]





    const {
        register,
        reset,
        formState: {errors, isSubmitting},
        handleSubmit,
    } = useForm();

    
    const allErrors = Object.values(errors).map(key=>{return <div key={key.message}>{key.message}</div>})
    
    const numberRegex = /^\d+$/;

    const onSubmit = async (data)=>{
        data = {...data,major:major}
        console.log(data)
        await new Promise((resolve)=>setTimeout(resolve,2000))
    }

    return <div className="  flex flex-col items-center ">
             <div className="p-10 text-center">
                <div className="text-3xl font-bold">انضم الينا</div>
                <div className="pt-8">انضم لمجتمع فعّال وبيئة خصبة للتعلم والابداع</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}  className=" bg-white w-full py-10 px-4 sm:px-52" dir="rtl">
                {/* form box starts here */}
                <div className="text-ftc-primary text-xl ">التسجيل</div>
                <div className="bg-ftc-surface  drop-shadow-xl px-4 py-4 rounded-md md:grid grid-cols-2 gap-x-2">
                    <div className="w-full col-span-2 ">
                        {/* this boolean expression checks the whole error object */}
                       { Object.keys(errors).length > 1 && <Alert color='failure' >
                        {allErrors}
                        </Alert>}
                    </div>
                    <Input label='الاسم' 
                        invalid={errors.name}
                        formHook={
                                {...register('name',{
                                    required:'الاسم مطلوب',
                                    
                                })}
                            }
                    
                        />
                    
                    <Input label='البريد الالكتروني'
                        invalid={errors.email}
                        formHook={
                            {...register('email',{
                                required:'الايميل مطلوب',
                                
                            })}
                        }
                    />
                   
                    <Input label='رقم الجوال'
                         invalid={errors.number}
                         placeholder={'50xxxxxxx'}
                         formHook={
                             {...register('number',{
                                 required:'رقم الجوال مطلوب',
                                 
                                 minLength:{
                                    value:9,
                                    message:' رقم الجوال مكون من 9 ارقام '
                                 },
                                 maxLength:{
                                    value:9,
                                    message:'  رقم الجوال مكون من 9 ارقام '
                                 },
                                 pattern: {
                                    value: numberRegex,
                                    message:'رقم الجوال مكون من ارقام فقط بدون مسافات'
                                }
                             })}
                         }
                    /> 
                    <Input label='الرقم الجامعي' 
                        
                        invalid={errors.collageId}
                        formHook={
                            {...register('collageId',{
                                required:'الرقم الجامعي مطلوب',
                                pattern: {
                                    value: numberRegex,
                                    message:'الرقم الجامعي ارقام فقط'
                                }
                                    
                                
                            })}
                        }
                    />
                    <div className="col-span-2 w-full">
                        {/* <DropDown value={major} placeholder={'التخصص'} className=' w-full md:w-1/2' options={majorOptions} setValue={setMajor} */}
                        <DropDown options={majorOptions}  placeholder={'التخصص'} className=' w-full md:w-1/2' 

                            value={major}
                            setValue={setMajor}
                        />
                    </div>
                    <Input label="هل لديك خبرة برمجية ؟" textarea />
                    <Input label="تحدث عن نفسك" textarea />
                    <Input label="هل لديك خبرة في التصميم والمونتاج ؟" textarea />
                    <Input label="هل لديك اعمال تطوعية سابقة    ؟" textarea />
                    <Input label="أي ملاحظات ؟" textarea />
                    <div className="w-full col-span-2 flex justify-center">
                        <Button type='submit' primary className={`md:w-3/4 w-full disabled:opacity-25`} disabled={ true } >{!isSubmitting && <div>ارسال</div>}</Button>
                    </div>
                </div>
            </form>
    </div>
}

export default Apply