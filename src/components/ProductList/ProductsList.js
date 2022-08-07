import NextImage from "../Image/Image"
import Link from "next/link"
import styles from "./ProductList.module.scss"

const ProductsList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((_product) => (
        <div key={_product.id} className={styles.card}>
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className={""}>
                <div className={""}>
                  <NextImage media={_product.image} />
                </div>
              </div>
              <div className={""}>
                <h4 className={""}>{_product.title} sticker</h4>
                <div className={""}>{_product.description}</div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
