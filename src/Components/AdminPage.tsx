import { useEffect, useState } from 'react';
import './AdminPage.css';
import Product from './Product';

let AdminPage = () => {
  const [allProduct, setAllProduct] = useState([{
    id: null,
    category: null,
    name: null,
    price: null,
    description: null
  }]);

  let loadAllProduct = () => {

    fetch(process.env.REACT_APP_BACKEND_URL + '/products/all')
      .then(result => result.json())
      .then(data => setAllProduct(data))
  }
  useEffect(loadAllProduct, []);

  return (
    <div className="admin-page">
      <h2>Kategóriák</h2>
      <div>

      </div>
      <div>Új kategória</div>
      <h2>Termékek</h2>
      <div>
        {allProduct.map(product => <Product id={product.id} category={product.category} name={product.name} price={product.price} description={product.description} />)}
      </div>
    </div>
  )
}

export default AdminPage;