import Link from "next/link"
import NextImage from "../Image/Image"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <NextImage
            src="/strapi.png"
            alt="home"
            className="logo"
            height="44"
            width="150"
          />
        </a>
      </Link>
      <button className="snipcart-checkout">
        <span className="snipcart-total-price"></span>
      </button>
    </div>
  )
}

export default Navbar
