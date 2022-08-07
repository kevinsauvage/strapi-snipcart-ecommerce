import CategoryButtons from "../CategoryButtons/CategoryButtons"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import styles from "./Layout.module.scss"

const Layout = ({ children, categories }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <CategoryButtons categories={categories} />
      <div className={""}>{children}</div>
      <Footer />
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  )
}

export default Layout
