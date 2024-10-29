import data from "../../../data/products.json";
import Item from "../components/Item";
const Latest = () => {
  return (
    <section>
        <div>
            <h3 className="text-center pt-12 pb-4 font-bold text-3xl">Latest Products</h3>
            <hr className="h-[3px] w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-12" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 p-6">
            {data.slice(110,117).map((product,index)=>(
                <Item key={index} id={product.id} name={product.name} oldPrice={product.oldPrice} newPrice={product.newPrice} imagePath={product.imagePath}/>
            ))}
        </div>
    </section>  
  )
}

export default Latest