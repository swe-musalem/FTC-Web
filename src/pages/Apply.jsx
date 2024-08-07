import Input from '../components/Input';
import { useState } from 'react';
import DropDown from '../components/DropDown';
import Button from '../components/Button';

import { Alert } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { PongSpinner } from 'react-spinners-kit';

function Apply() {
  const {
    register,
    reset,
    setValue,
    watch,
    getValues,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm();

  const [major, setMajor] = useState('');
  const majorOptions = [
    {
      label: 'هندسة البرمجيات',
      dbvalue: 'SWE',
    },
    {
      label: 'نظم المعلومات',
      dbvalue: 'IS',
    },
    {
      label: 'هندسة الحاسب',
      dbvalue: 'CEN',
    },
    {
      label: 'علوم الحاسب',
      dbvalue: 'CS',
    },
  ];

  const [serverErrors, setServerErrors] = useState('');

  const [isSubmittingToServer, setIsSubmittingToServer] = useState(false);

  const [isSubmitToServerSuceess, setIsSubmitToServerSuceess] = useState(false);

  const isApplyingOpen = false;

  const allErrors = Object.values(errors).map((key) => {
    return <div key={key.message}> * {key.message}</div>;
  });
  // const allServerErrors = serverErrors.map(value=>{return <div key={value} >{value}</div> })

  const numberRegex = /^[\d+]+$/;

  const onSubmit = async (data) => {
    // const phone_number_without_prefix = watch('phone_number')

    data = {
      ...data,
      major: major,
    };
    // https://ftc-api.onrender.com

    setIsSubmittingToServer(true);
    axios
      .post('https://ftc-api.onrender.com/applicant', data)
      .then((res) => {
        if (isSubmitSuccessful || res.status === 200) {
          reset();
          setServerErrors([]);
          setIsSubmittingToServer(false);
          setIsSubmitToServerSuceess(true);
          setMajor('التخصص');
        }
      })
      .catch((error) => {
        // const arrayofErrors = Object.values(error.response.data).flat(1)
        setServerErrors(error.response.data.detail);
        setIsSubmittingToServer(false);
      });
  };

  return (
    <div className="  flex flex-col items-center ">
      <div className="p-10 text-center">
        <div className="text-3xl font-bold">انضم الينا</div>
        <div className="pt-8">انضم لمجتمع فعّال وبيئة خصبة للتعلم والابداع</div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-white w-full py-10 px-4 sm:px-52"
        dir="rtl"
      >
        {/* form box starts here */}
        <div className="text-ftc-primary text-xl ">التسجيل</div>
        <div className="bg-ftc-surface  drop-shadow-xl px-4 py-4 rounded-md md:grid grid-cols-2 gap-x-2">
          <div className="w-full col-span-2 ">
            {/* this boolean expression checks the whole error object */}
            {Object.keys(errors).length > 0 && (
              <Alert color="failure">{allErrors}</Alert>
            )}

            {serverErrors.length > 0 && (
              <Alert color="failure" className="mt-2">
                {serverErrors}
              </Alert>
            )}

            {isSubmitToServerSuceess && (
              <Alert color="success">
                <div>تم الارسال بنجاح</div>
              </Alert>
            )}
          </div>
          <Input
            label="الاسم"
            invalid={errors.name}
            formHook={{
              ...register('name', {
                required: 'الاسم مطلوب',
              }),
            }}
          />

          <Input
            label="البريد الالكتروني"
            invalid={errors.email}
            formHook={{
              ...register('email', {
                required: 'الايميل مطلوب - ',
              }),
            }}
          />

          <Input
            label="رقم الجوال"
            invalid={errors.phone_number}
            placeholder={'50xxxxxxx'}
            formHook={{
              ...register('phone_number', {
                required: 'رقم الجوال مطلوب',

                pattern: {
                  value: numberRegex,
                  message: 'رقم الجوال مكون من ارقام فقط بدون مسافات - ',
                },
              }),
            }}
          />
          <Input
            label="الرقم الجامعي"
            invalid={errors.college_id}
            formHook={{
              ...register('college_id', {
                required: 'الرقم الجامعي مطلوب',
                pattern: {
                  value: numberRegex,
                  message: 'الرقم الجامعي ارقام فقط',
                },
              }),
            }}
          />
          <div className="col-span-2 w-full">
            {/* <DropDown value={major} placeholder={'التخصص'} className=' w-full md:w-1/2' options={majorOptions} setValue={setMajor} */}
            <DropDown
              options={majorOptions}
              placeholder={'التخصص'}
              className=" w-full md:w-1/2"
              value={major}
              setValue={setMajor}
            />
          </div>
          <Input
            label="هل لديك خبرة برمجية ؟"
            invalid={errors.experience_in_programming}
            textarea
            formHook={{
              ...register('experience_in_programming', {
                required: 'الرجاء عدم ترك خانة "هل لديك حبرة برمجية ؟"',
              }),
            }}
          />
          <Input
            label="تحدث عن نفسك"
            textarea
            invalid={errors.about_me}
            formHook={{
              ...register('about_me', {
                required: 'الرجاء عدم ترك خانة "تحدث عن نفسك"',
              }),
            }}
          />
          <Input
            label="هل لديك خبرة في التصميم والمونتاج ؟"
            textarea
            invalid={errors.experience_in_design}
            formHook={{
              ...register('experience_in_design', {
                required: 'الرجاء عدم ترك خانة التصميم والمونتاج فارغة',
              }),
            }}
          />
          <Input
            label="هل لديك اعمال تطوعية سابقة    ؟"
            textarea
            invalid={errors.volunteering}
            formHook={{
              ...register('volunteering', {
                required: 'الرجاء عدم ترك خانة الاعمال التطوعية فارغة',
              }),
            }}
          />
          <Input
            label="أي ملاحظات ؟"
            textarea
            formHook={{ ...register('notes', {}) }}
          />
          <div className="w-full col-span-2 flex justify-center">
            <Button
              type="submit"
              primary
              className={`md:w-3/4 w-full flex justify-center disabled:opacity-25`}
              disabled={!isApplyingOpen || isSubmittingToServer}
            >
              {!isSubmittingToServer && isApplyingOpen && <div>ارسال</div>}
              {isSubmittingToServer && (
                <PongSpinner size={50} color="#ffffff" />
              )}
              {!isApplyingOpen && <div> التقديم مغلق </div>}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Apply;
