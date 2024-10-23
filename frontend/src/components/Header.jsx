import { Link } from "react-router-dom";
import Nav from "./Nav";
import { SlBasket } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const Header = () => {
  const [openedmobileNav,setOpenedmobileNav] = useState(false);
  let openmobileNav = ()=>{
    setOpenedmobileNav(!openedmobileNav)
  }

  return (
    <header className="flex justify-between items-center p-2 container px-5">
        <Link to={"/"}>
            <img className="" src="/logo.jpg" alt="logo" width={110} />
        </Link>
        <Nav openedmobileNav={openedmobileNav}/>
        {/* logout and buttons */}
        <div className="flex justify-between items-center gap-5">
            <button className="md:hidden border-[1px] border-slate-400 p-2 rounded-full relative" onClick={openmobileNav}>
                  
            {openedmobileNav? <IoMdClose/>:<AiOutlineMenu/>}
            </button>
            <Link to={"/chart"}>
                <div className="border-[1px] border-slate-400 p-2 rounded-full relative">
                  <SlBasket/>
                  <div className="absolute left-[85%] bottom-[85%] px-[0.3rem] text-[0.6rem] bg-lime-600 text-white rounded-full">
                    0
                  </div>
                </div>
            </Link>
            <Link to={"/"}>
                <div className="p-2 bg-lime-600 text-white rounded-[20px] flex justify-between items-center gap-2">
                        <TbLogout2/>  
                    Logout
                </div>
            </Link>
        </div>
    </header>
    
  )
}

export default Header