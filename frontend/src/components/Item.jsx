const Item = ({id,name,oldPrice,newPrice,imagePath}) => {
  return (
    <div>
        <img src={imagePath} width={300} alt={`product_${id}`} />
        <h3>{name}</h3>
        <h3>{oldPrice}</h3>
        <h3>{newPrice}</h3>
    </div>
  )
}

export default Item