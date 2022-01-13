import { FC } from "react"
import Header from "./header"
import Footer from "./footer"

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
