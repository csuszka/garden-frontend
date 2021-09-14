import './Category.css'

type Props = {
  id: number | null,
  parentId: number | null,
  name: string | null,
  parentName: string | null
}

const Category = ({ id, parentId, parentName, name }: Props) => {
  const handleCategoryDelete = (id: number | null) => {

  }
  const handleCategoryChange = () => {

  }

  return (
    <div className="category">
      <div>{name}</div>
      {parentName ? <div>Kategória csoport: {parentName}</div> : null}
      <div className="category-modify-save-button">Módosít</div>
      <div className="category-delete-button" onClick={() => handleCategoryDelete(id)}>Törlés</div>
    </div>
  )
}

export default Category;