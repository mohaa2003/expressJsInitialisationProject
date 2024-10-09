import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbMoodKid } from "react-icons/tb";
import { IoWomanOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";


const Nav = () => {
  return (
    <nav>
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
  )
}

export default Nav