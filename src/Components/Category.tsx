import './Category.css'

type Props = {
  id: number | null,
  parentId: number | null,
  name: string | null
}

const Category = ({ id, parentId, name }: Props) => {
  return (
    <div className="category">
      <div className="category-id">{id}</div>
      {parentId ? <div>{parentId}</div> : null}
      <div>{name}</div>
      <div className="category-modify-save-button">Módosít</div>
    </div>
  )
}

export default Category;