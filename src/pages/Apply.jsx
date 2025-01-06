import Input from '../components/Input';
import { useEffect, useState } from 'react';
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

  const [commite, setCommite] = useState('');

  const [gender, setGender] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);



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
    {
      label: 'تقنية المعلومات',
      dbvalue: 'IT',
    },
    {
      label: 'اخرى',
      dbvalue: 'OTH',
    },
  ];
  const committeOptions = [
    {
      label: 'اللجنة الإعلامية - فريق التصوير والمونتاج',
      dbvalue: 'اللجنة الإعلامية - فريق التصوير والمونتاج',
    },
    {
      label: 'اللجنة الإعلامية - فريق التصميم',
      dbvalue: 'اللجنة الإعلامية - فريق التصميم',
    },
    // gender !== 'أنثى' && {
    //   label: 'لجنة الموارد البشرية - المقر',
    //   dbvalue: 'لجنة الموارد البشرية - المقر',
    // },
    {
      label: 'اللجنة الإعلامية - فريق كتابة المحتوى',
      dbvalue: 'اللجنة الإعلامية - فريق كتابة المحتوى',
    },
    {
      label: 'لجنة الموارد البشرية - الشؤون الداخلية',
      dbvalue: 'لجنة الموارد البشرية - الشؤون الداخلية',
    },
    {
      label: 'لجنة المالية',
      dbvalue:  'لجنة المالية',
    },
    {
      label: 'لجنة العلاقات العامة',
      dbvalue: 'لجنة العلاقات العامة',
    },
    {
      label: 'لجنة الابتكار',
      dbvalue: 'لجنة الابتكار',
    },
  ];

  const genderOptions = [{
    label:'ذكر',
    dbvalue:'ذكر'
  },
  {
    label:'أنثى',
    dbvalue:'أنثى'
  }
]

  const [serverErrors, setServerErrors] = useState('');

  const [isSubmittingToServer, setIsSubmittingToServer] = useState(false);

  const [isSubmitToServerSuceess, setIsSubmitToServerSuceess] = useState(false);

  const [lengthError, setLengthError] = useState('');


  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=>{
    const fetchStatus = async () => {
        try {
            const response = await axios.get('https://ftc-api-1.onrender.com/status');
            setIsChecked(response.data.is_open);
        } catch (error) {
            console.error('Failed to fetch status', error);
        }
    };
    fetchStatus()
  },[])

  const experienceInProgramming = watch('experience_in_programming', '');
  const aboutMe = watch('about_me', '');
  const experienceInDesign = watch('experience_in_design', '');
  const volunteering = watch('volunteering', '');
  const notes = watch('notes', '');

  useEffect(() => {
    if (experienceInProgramming.length > 1000) {
      setLengthError('لا يمكن أن تتجاوز خانة "هل لديك حبرة برمجية؟" 1000 حرف');
      setIsButtonDisabled(true);
    } else if (aboutMe.length > 1000) {
      setLengthError('لا يمكن أن تتجاوز خانة "تحدث عن نفسك" 1000 حرف');
      setIsButtonDisabled(true);
    } else if (experienceInDesign.length > 1000) {
      setLengthError('لا يمكن أن تتجاوز خانة "هل لديك خبرة في التصميم والمونتاج؟" 1000 حرف');
      setIsButtonDisabled(true);
    } else if (volunteering.length > 1000) {
      setLengthError('لا يمكن أن تتجاوز خانة "هل لديك اعمال تطوعية سابقة؟" 1000 حرف');
      setIsButtonDisabled(true);
    } else if (notes.length > 1000) {
      setLengthError('لا يمكن أن تتجاوز خانة "أي ملاحظات؟" 1000 حرف');
      setIsButtonDisabled(true);
    } else {
      setLengthError('');
      setIsButtonDisabled(false);
    }
  }, [experienceInProgramming, aboutMe, experienceInDesign, volunteering, notes]);

  const isApplyingOpen = isChecked;

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
      gender:gender,
      commite:commite,
    };
    console.log(data);
    // https://ftc-api-1.onrender.com

    setIsSubmittingToServer(true);
    axios
    // https://ftc-api-1.onrender.com/applicant
      .post('https://ftc-api-1.onrender.com/applicant', data)
      .then((res) => {
        if (isSubmitSuccessful || res.status === 200) {
          reset();
          setServerErrors([]);
          setIsSubmittingToServer(false);
          setIsSubmitToServerSuceess(true);
          setMajor('التخصص');
          setCommite('اللجنة')
          setGender('الجنس')
        }
      })
      .catch((error) => {
        // const arrayofErrors = Object.values(error.response.data).flat(1)
        setServerErrors(error?.response?.data?.detail);
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
        <div className="bg-ftc-surface  border px-4 py-4 rounded-md md: grid-cols-2 gap-x-2">
          <div className="w-full col-span-2 ">
            {/* this boolean expression checks the whole error object */}
            {Object.keys(errors).length > 0 && (
              <Alert color="failure">{allErrors}</Alert>
            )}
            {lengthError && <Alert color="failure">{lengthError}</Alert>}
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
          <div className="col-span-1 w-full">
            {/* <DropDown value={major} placeholder={'التخصص'} className=' w-full md:w-1/2' options={majorOptions} setValue={setMajor} */}
            <DropDown
              options={majorOptions}
              placeholder={'التخصص'}
              className=" w-full"
              value={major}
              setValue={setMajor}
            />
          </div>
          <div className="col-span-1 w-full my-2 sm:my-0">
            <DropDown
              options={committeOptions}
              placeholder={'اللجنة'}
              className=" w-full"
              value={commite}
              setValue={setCommite}
            />
            <DropDown
              options={genderOptions}
              placeholder={'الجنس'}
              className="w-full my-2"
              value={gender}
              setValue={setGender}
            />
          </div>
          

          <Input
            label="هل لديك خبرة برمجية ؟"
            invalid={errors.experience_in_programming}
            textarea
            formHook={{
              ...register('experience_in_programming', {
                required: 'الرجاء عدم ترك خانة "هل لديك حبرة برمجية ؟"',
                maxLength:{
                  value: 1000, // Set the maximum length to 1000 characters
                  message: 'لا يمكن أن تتجاوز خانة "هل لديك حبرة برمجية؟" 1000 حرف',
                },
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
                maxLength: {
                  value: 1000, // Set the maximum length to 1000 characters or any appropriate value
                  message: 'لا يمكن أن تتجاوز خانة "تحدث عن نفسك" 1000 حرف',
                },
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
                maxLength: {
                  value: 1000, // Set the maximum length to 1000 characters or any appropriate value
                  message: 'لا يمكن أن تتجاوز خانة "هل لديك خبرة في التصميم والمونتاج؟" 1000 حرف',
                },
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
                maxLength: {
                  value: 1000, // Set the maximum length to 1000 characters or any appropriate value
                  message: 'لا يمكن أن تتجاوز خانة "هل لديك اعمال تطوعية سابقة؟" 1000 حرف',
                },
              }),
            }}
          />
          <Input
            label="أي ملاحظات ؟"
            textarea
            formHook={{ ...register('notes', {}),
            maxLength: {
              value: 1000, // Set the maximum length to 1000 characters or any appropriate value
              message: 'لا يمكن أن تتجاوز خانة "أي ملاحظات؟" 1000 حرف',
            },
          }}
          />
          <div className="w-full col-span-2 flex justify-center">
            <Button
              type="submit"
              primary
              className={`md:w-3/4 w-full flex justify-center disabled:opacity-25`}
              disabled={!isApplyingOpen || isSubmittingToServer || isButtonDisabled}
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
