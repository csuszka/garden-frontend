import React, { useEffect, useState } from 'react';
import './AdminPage.css';
import Product from './Product';
import Category from './Category';

let AdminPage = () => {
  const [allCategories, setAllCategories] = useState([{
    id: null,
    parent_id: null,
    name: null
  }]);
  const [allProduct, setAllProduct] = useState([{
    id: null,
    category: null,
    name: null,
    price: null,
    description: null
  }]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    parentId: ""
  })

  const handleNewNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory({ name: e.target.value, parentId: newCategory.parentId });
  };

  const handleIdSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewCategory({ name: newCategory.name, parentId: e.target.value });
  }

  const handleNewCategorySaveClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await createCategory();
    loadAllCategories();
  }

  const createCategory = async () => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory)
    };
    try {
      const fetchResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/categories/create`, settings);
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  let loadAllCategories = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/categories/all')
      .then(result => result.json())
      .then(data => setAllCategories(data))
  }

  let loadAllProduct = () => {

    fetch(process.env.REACT_APP_BACKEND_URL + '/products/all')
      .then(result => result.json())
      .then(data => setAllProduct(data))
  }
  useEffect(loadAllCategories, []);
  useEffect(loadAllProduct, []);

  return (
    <div className="admin-page">
      <h2>Kategóriák</h2>
      <div className="add-category">
        <h3>Új kategória hozzáadása</h3>
        <form className="add-category-form">
          <input type="text" placeholder="Kategória elnevezése" value={newCategory.name} onChange={handleNewNameChange} />
          <select name="categories" id="category-select" onChange={handleIdSelectChange}>
            <option value="">--Válassz főkategóriát--</option>
            {allCategories.map(category => category.parent_id ? null : <option value={`${category.id}`}>{category.name}</option>)}
          </select>
          <div className='add-category-button' onClick={handleNewCategorySaveClick}>Mentés</div>
        </form>
      </div>
      <div>
        {allCategories.map(category => {
          let parentId = category.parent_id;
          let parentName: string | null = "";
          if (parentId) {
            parentName = allCategories.filter(cat => cat.id === parentId)[0].name;
          }
          return <Category key={category.id} id={category.id} parentId={category.parent_id} name={category.name} parentName={parentName} />
        }
        )}
      </div>
      <h2>Termékek</h2>
      <div>
        {allProduct.map(product => <Product id={product.id} category={product.category} name={product.name} price={product.price} description={product.description} />)}
      </div>
    </div>
  )
}

export default AdminPage;