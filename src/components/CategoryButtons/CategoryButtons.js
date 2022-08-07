import Link from "next/link"
import styles from "./CategoryButtons.module.scss"

const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className={styles.container}>
      {categories.map((_category) => (
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a className={styles.button}>{_category.name}</a>
        </Link>
      ))}
    </div>
  )
}

export default CategoryButtons
