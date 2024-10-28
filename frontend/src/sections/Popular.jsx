import data from "../../../data/products.json";
import Item from "../components/Item";

const Popular = () => {
  return (
    <section>
        {data.slice(0,10).map((product,index)=>(
            <Item key={index} id={product.id} name={product.name} oldPrice={product.oldPrice} newPrice={product.newPrice} imagePath={product.imagePath}/>
        ))}
    </section>
  )
}

export default Popular