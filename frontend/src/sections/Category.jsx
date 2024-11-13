import { useState } from "react";
import data from "../../../data/categories.json";
import Item from "../components/Item";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Category = ({ category, banner }) => {
  
  const [endPosition,setEndPosition] = useState({mens:20,womens:20,"kids'":20});

  let categoryData = [];
  data.forEach((product, index,) => {
    if (product.category + "'" === category || product.category + "s" === category) {
      categoryData.push(<Item key={index} id={product.id} name={product.name} oldPrice={product.oldPrice} newPrice={product.newPrice} imagePath={product.imagePath} />);
    }
  })

  const loadMoreResults = (category)=>{
    if(endPosition[category] + 20 <= categoryData.length){
      setEndPosition((endPos)=>({
        ...endPos,
        [category]:endPos[category] + 20
      }))
    }
    else{
      setEndPosition((endPos)=>({
        ...endPos,
        [category]:categoryData.length
      }))
    }
  }

  const lessResults = ()=>{
    if(endPosition[category] - 20 >= 20){
      setEndPosition((endPos)=>({
        ...endPos,
        [category]:endPos[category] - 20
      }))
    }
    else{
      setEndPosition((endPos)=>({
        ...endPos,
        [category]:20
      }))
    }
  }

  return (
    <section>
      <div className="w-screen p-12 ">
        <img className="w-full h-[200px]" src={banner} alt={`${category} category banner`} />
      </div>

      <div className="flex justify-between p-6">
        <div>
          <h5 className="text-md">Showing of <span className="text-lg font-bold">{endPosition[category]}</span> out of <span className="text-lg font-bold">{categoryData.length}</span> products</h5>
        </div>
        <div className="p-3 flex items-center gap-2 ring-1 ring-slate-400 rounded-full">
          <span>Sort by</span>
          <MdOutlineKeyboardArrowDown/>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 p-6">
        {
          categoryData.slice(0, endPosition[category])
        }
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {endPosition[category] !== categoryData.length && <button className="p-4 px-8 rounded-full ring-1 ring-slate-400 bg-black text-white" onClick={()=>{loadMoreResults(category)}} >Load more</button>} 
        {endPosition[category] !== 20 && <button className="p-4 px-8 rounded-full ring-1 ring-slate-400 bg-black text-white" onClick={()=>{lessResults(category)}} >Show less</button>} 
      </div>
    </section>
  )
}

export default Category