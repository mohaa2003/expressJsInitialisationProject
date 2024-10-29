import data from "../../../data/products.json";
import Item from "../components/Item";

const Popular = () => {
  return (
    <section>
        <div>
            <h3 className="text-center pt-6 pb-4 font-bold text-3xl">Popular Products</h3>
            <hr className="h-[3px] w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 p-6">
            {data.slice(0,10).map((product,index)=>(
                <Item key={index} id={product.id} name={product.name} oldPrice={product.oldPrice} newPrice={product.newPrice} imagePath={product.imagePath}/>
            ))}
        </div>
    </section>
  )
}

export default Popular