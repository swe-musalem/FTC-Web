import { useEffect, useRef, useState } from "react";
import logoNavbar from "../assets/logoNavbar.svg";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link ,NavLink, useHref} from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hoverClassNav = "relative after:bg-ftcpallete-95 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:right-0 after:top-6 hover:after:w-full after:transition-all after:duration-700"
  const clickClassNav = "relative after:bg-ftcpallete-95 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:right-0 after:top-6 after:w-full"
  


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const mobileNav = useRef(null);
  

  // ! refactor links in objects to not repeat code twice

  //  * copied from figma

  return (
    <div className="top-0 sticky z-10">
      <div
        className="text-ftc-surface overflow-x-hidden "
        style={{
          background:
            "linear-gradient(100.2deg, #6535BB -8.36%, #2A9EEA 187.38%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
        }}
      >
        <div className="flex sm:justify-around justify-between px-4 items-center py-4">
          <img src={logoNavbar} className=" w-36 sm:w-48" />
          <div className="lg:flex hidden md:justify-center lg:justify-around  gap-x-4   md:whitespace-wrap ">
          <NavLink to="/about" className={({isActive})=>{return isActive ? hoverClassNav +clickClassNav : hoverClassNav}}>من نحن</NavLink>
            <NavLink to="/gradutes" className={({isActive})=>{return isActive ? hoverClassNav +clickClassNav : hoverClassNav}}>خريجو النادي</NavLink>
            <NavLink to="/collagemap" className={({isActive})=>{return isActive ? hoverClassNav +clickClassNav : hoverClassNav}}>خريطة كلية الحاسب</NavLink>
            <NavLink to="/plans" className={({isActive})=>{return isActive ? hoverClassNav +clickClassNav : hoverClassNav}}>مصادر و خطط التخصصات</NavLink>
            <NavLink to="/events" className={({isActive})=>{return isActive ? hoverClassNav +clickClassNav : hoverClassNav}}>الاحداث و الفعاليات </NavLink>
            <NavLink to="" className={({isActive})=>{return isActive ? hoverClassNav +clickClassNav : hoverClassNav}}>الصفحة الرئيسية</NavLink>
          </div>
          
        
            <Link to='/apply'>
            <Button className={" hidden lg:block  "} surface>انضم الينا</Button>
            </Link>

          <RxHamburgerMenu
            onClick={handleClick}
            className="lg:hidden text-3xl"
          />
        </div>
      </div>

      <div
        onClick={handleClose}
        ref={mobileNav}
        style={{
          background:
            "linear-gradient(100.2deg, #6535BB -8.36%, #2A9EEA 187.38%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
        }}
        className={`flex flex-col  ${
          isOpen ? "block" : "hidden"
        } px-10 pt-4 gap-y-8 justify-start animate-fade-down transition duration-150 ease-out hover:ease-in animate-once bg-ftc-primary h-screen  `}
        >
        
        <Link to='/apply'>
          <Button className="w-full" surface>
            انضم الينا
          </Button>
        </Link>
       


        <Link to="/">
          <Button className="w-full" outline>
            الصفحة الرئيسية
          </Button>
        </Link>

        <Link to="/events">
          <Button className="w-full" outline>
            الاحداث و الفعاليات
          </Button>
        </Link>

        <Link to="/plans">
          <Button className="w-full" outline>
            مصادر و خطط التخصصات
          </Button>
        </Link>

        <Link to="/collagemap">
          <Button className="w-full" outline>
            خريطة كلية الحاسب
          </Button>
        </Link>

        <Link to="/gradutes">
          <Button className="w-full" outline>
            خريجو النادي
          </Button>
        </Link>

        <Link to="/about">
          <Button className="w-full" outline>
            من نحن
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
