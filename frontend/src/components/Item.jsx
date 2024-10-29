import {Link} from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "./item.css";

const Item = ({id,name,oldPrice,newPrice,imagePath}) => {
  return (
    <div className="shadow-md shadow-slate-500 rounded-lg">
        <div className="relative conte w-full group overflow-hidden">
            <img className="group-hover:scale-125 transition-all duration-500 w-full" src={imagePath} alt={`product_${id}`} />
            <Link className="link absolute w-[50px] h-[50px] rounded-full bg-white flex justify-center scale-0 items-center group-hover:scale-100 hover:rotate-[-270deg] transition-all duration-500 group " to={`product/${id}`}>
                <IoSearch className=""/>
            </Link>
        </div>
        <div className="p-4 flex flex-col gap-3">
            <h4 className="line-clamp-2 font-medium text-sm text-center text-gray-800">{name}</h4>
            <div className="flex justify-around items-center">
                <p className="text-sm font-medium text-green-500">{newPrice} DZD</p>
                <p className="text-sm font-medium text-red-500 line-through">{oldPrice} DZD</p>
            </div>
        </div>
    </div>
  )
}

export default Item