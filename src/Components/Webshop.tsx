import './Webshop.css';
import ProductCard from './ProductCard';

function Webshop () {

  return (
    <div className="webshop">
      <header className="webshop-header">
      </header>
      <div className="product-shelf">
        <ProductCard imageUrl="" productName="" price="" />
        <ProductCard imageUrl="" productName="" price="" />
        <ProductCard imageUrl="" productName="" price="" />
        <ProductCard imageUrl="" productName="" price="" />
        <ProductCard imageUrl="" productName="" price="" />
        <ProductCard imageUrl="" productName="" price="" />

      </div>
    </div>
  );
}

export default Webshop;