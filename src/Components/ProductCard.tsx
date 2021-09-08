import './ProductCard.css';

type Props = {
  imageUrl: string | null,
  productName: string | null,
  price: string | null,
}

function ProductCard ({ imageUrl, productName, price }: Props) {
  let imageStyle = {
    backgroundImage: `url(${imageUrl ? imageUrl : "/grass.png"})`
  }
  return (
    <div className="product-card">
      <img src="/grass.png" className="product-image" alt="product" />
      <div className="product-image" style={imageStyle}>
      </div>
      <header className="product-name">
        <h3>
          {productName ? productName : 'Termék'}
        </h3>
      </header>
      <p>
        {price ? price : '1 000 000 Ft'}
      </p>

    </div >
  );
}

export default ProductCard;