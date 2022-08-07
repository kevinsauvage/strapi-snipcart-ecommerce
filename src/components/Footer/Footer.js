import NextImage from "../Image/Image"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={""}>Next.js E-commerce</p>
      <div className={""}>
        <a href="https://twitter.com/strapijs" className={""}>
          <NextImage src="/twitter.svg" width={20} height={20} alt="Twitter" />
        </a>
        <a href="https://facebook.com/strapijs" className={""}>
          <NextImage
            src="/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
          />
        </a>
        <a
          href="https://github.com/strapi/strapi-starter-next-ecommerce"
          className="ml-3"
        >
          <NextImage src="/github.svg" width={20} height={20} alt="GitHub" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
