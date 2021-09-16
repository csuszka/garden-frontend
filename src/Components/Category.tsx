import { useEffect } from 'react'
import './Category.css'

type Props = {
  id: number | null,
  parentId: number | null,
  name: string | null,
  parentName: string | null
}

const Category = ({ id, parentId, parentName, name }: Props) => {

  const handleCategoryDelete = async (id: number | null) => {
    const settings = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      const fetchResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/categories/${id}`, settings);
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  }
  const handleCategoryChange = () => {

  }

  useEffect(() => console.log(1), [])
  return (
    <div className="category">
      <div>{name}</div>
      {parentName ? <div>Kategória csoport: {parentName}</div> : null}
      <div className="category-modify-save-button" onClick={() => handleCategoryChange}>Módosít</div>
      <div className="category-delete-button" onClick={() => handleCategoryDelete(id)}>Törlés</div>
    </div>
  )
}

export default Category;