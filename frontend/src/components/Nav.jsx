import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbMoodKid } from "react-icons/tb";
import { IoWomanOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";

const Nav = ({openedmobileNav}) => {
  return (
    <>
        {/* Nav for pc */}
        <nav className="hidden md:block">
            <ul className="flex justify-center items-center gap-[30px]">
                <li>
                    <NavLink to={'/'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className={"flex items-center gap-2 hover:text-lime-600"}>
                            <IoHomeOutline/>
                            Home
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/men'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className="flex items-center gap-2 hover:text-lime-600">
                            <IoManOutline/>
                            Men
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/women'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className="flex items-center gap-2 hover:text-lime-600">
                            <IoWomanOutline/>
                            Women
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/kids'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className="flex items-center gap-2 hover:text-lime-600">
                            <TbMoodKid/>
                            Kids
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>

        {/* Nav for less than medium size */}

        <nav className={"md:hidden fixed top-[80px] border-[1px] border-black bg-white px-16 py-8 rounded-[20px] transition-all duration-500 " + (openedmobileNav? "left-[50vw]":"left-[110%]")}>
            <ul className="flex flex-col justify-center items-center gap-[30px]">
                <li>
                    <NavLink to={'/'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className={"flex items-center gap-2 hover:text-lime-600"}>
                            {<IoHomeOutline/>}
                            Home
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/men'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className="flex items-center gap-2 hover:text-lime-600">
                            <IoManOutline/>
                            Men
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/women'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className="flex items-center gap-2 hover:text-lime-600">
                            <IoWomanOutline/>
                            Women
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/kids'} className={({isActive}) => isActive? "active" : "inactive"}>
                        <div className="flex items-center gap-2 hover:text-lime-600">
                            <TbMoodKid/>
                            Kids
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav