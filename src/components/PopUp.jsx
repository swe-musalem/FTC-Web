import { Modal } from 'flowbite-react';
import Button from './Button';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

function PopUp({details}) {

  const [openModal, setOpenModal] = useState(false);

  const whatsupMsgLocalStorage = localStorage.getItem('whatsupMsg')
  // here the message needs to be encoded to ensure spaces and new lines
  const whatsupMsg = encodeURIComponent(JSON.parse(whatsupMsgLocalStorage))
  
  

  const { name,
    experience_in_programming,
    about_me,
    college_id,
    email,
    experience_in_design,
    major,
    notes,
    phone_number,
    status,
    volunteering,
  } = details

  const textBoxStyle = "border rounded-md h-72 w-full break-words overflow-y-auto p-2"

  return<>
    <Button onClick={() => setOpenModal(true)} className={'underline decoration-ftc-primary decoration-1	'}>التفاصيل</Button>
    <Modal className='bg-gray-800 bg-opacity-50 font-Cairo ' dismissible  show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='w-full'>
          <div className='flex items-center gap-x-4'>
            <div>{name}</div>
            {phone_number}
            <a   target="_blank" href={`https://wa.me/${phone_number}?text=${whatsupMsg}`}>{<FaWhatsapp size={30} className='text-ftc-tertiary' />}</a>
          </div>
        </Modal.Header>
        <Modal.Body className='flex flex-wrap justify-center gap-x-12 bg-ftc-surface  p-x-0'>
          <div className='flex flex-col w-5/12 items-center'>
            <div>تحدث عن نفسك</div>
            <div className={textBoxStyle}>{about_me}</div>
          </div>
          <div className='flex flex-col  w-5/12 items-center '>
            <div>هل لديك خبرة برمجية</div>
            <div className={textBoxStyle} dir='rtl'>{experience_in_programming}</div>
          </div>
          <div className='flex flex-col  w-5/12 items-center '>
            <div>هل لديك اعمال تطوعية سابقة ؟ </div>
            <div className={textBoxStyle} >{volunteering}</div>
          </div>
          <div className='flex flex-col  w-5/12 items-center'>
            <div className='whitespace-nowrap'>هل لديك خبرة في التصميم والمونتاج ؟ </div>
            <div className={textBoxStyle}>{experience_in_design}</div>
          </div>
          <div className='flex flex-col  w-5/12 items-center'>
            <div className='whitespace-nowrap'>هل لديك ملاحظات  ؟ </div>
            <div className={textBoxStyle}>{notes}</div>
          </div>
         
        </Modal.Body>
        
      </Modal>
  </>
}

export default PopUp