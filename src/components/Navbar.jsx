import { useState } from 'react'
import logoNavbar from '../assets/logoNavbar.svg'
import Button from './Button'
import {RxHamburgerMenu} from 'react-icons/rx'
import { Link } from 'react-router-dom';

function Navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const handleClick = ()=> {
        setIsOpen(!isOpen)
    }

    const handleClose = ()=>{
        setIsOpen(false)
    }
    


    // ! refactor links in objects to not repeat code twice

    //  * copied from figma
    return <div>
    <div className="text-surface" style={{background: 'linear-gradient(100.2deg, #6535BB -8.36%, #2A9EEA 187.38%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'}}>
        <div className='flex sm:justify-around justify-between px-4 items-center py-4'>
            <img src={logoNavbar} className=' w-36 sm:w-48' />
            <div className='sm:flex justify-between w-1/2 gap-x-4 mx-4 hidden'>

                <Link to='/about'>من نحن</Link>
                <Link to='/gradutes'>خريجو النادي</Link>
                <Link to='/map'>خريطة كلية الحاسب</Link>
                <Link to='/resources'>مصادر و خطط التخصصات</Link>
                <Link to='/events'>الاحداث و الفعاليات </Link>
                <Link to='/'>الصفحة الرئيسية</Link>
            </div>

            <Button className={' hidden sm:block '} surface>انضم الينا</Button>

            <RxHamburgerMenu onClick={handleClick} className='sm:hidden text-3xl'/>
           
        </div>
    </div>
    {isOpen && 
        <div onClick={handleClose} className='flex flex-col px-10 pt-4 gap-y-8 justify-start  h-screen'>
            {/* here is a bug , when clicking on text it works on button it don't sol: wrap the button with link component  */}
            <Button className='' surface>انضم الينا</Button>
            <Button className='' outline><Link className='' to='/'>الصفحة الرئيسية</Link></Button>
            <Button className='' outline><Link to='/events'>الاحداث و الفعاليات </Link></Button>
            <Button className='' outline><Link to='/resources'>مصادر و خطط التخصصات</Link></Button>
            <Button className='' outline><Link to='/map'>خريطة كلية الحاسب</Link></Button>
            <Button className='' outline ><Link to='/gradutes'>خريجو النادي</Link></Button>
            <Button className='' outline ><Link to='/about'>من نحن</Link></Button>

        </div>
    }
    </div>
}




export default Navbar