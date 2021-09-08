import './Product.css'

type Props = {
  id: number | null,
  category: number | null,
  name: string | null,
  price: string | null,
  description: string | null
}

const Product = ({ id, category, name, price, description }: Props) => {
  return (
    <div className="product">
      <div className="product-id">{id}</div>
      <div>{category}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      <div className="product-modify-save-button">Módosít</div>
    </div>
  )
}

export default Product;