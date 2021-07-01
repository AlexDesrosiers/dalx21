import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navBar,
  footer
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
        <nav className={navBar}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className={heading}>{pageTitle}</h1>
      {children}
      <div className={footer}>
        <p> Footer </p>
      </div>
    </main>
  )
}
export default Layout
