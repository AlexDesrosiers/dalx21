import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  navBar,
  footer,
  siteTitle,
  header,
  body
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <main className={container}>
      <title> {pageTitle} | {data.site.siteMetadata.title}</title>


      <div className={header}>

        <div className={siteTitle}>
          <StaticImage
            alt="Alex Desrosiers"
            src="../images/smoll-signature.png"
          />
        </div>

        <div className={navBar}>
          <nav>
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
              <li className={navLinkItem}>
                <Link to="/contact-me" className={navLinkText}>
                  Contact Me
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>

      <div className={body}>
        {children}
      </div>

      <div className={footer}>
        <p> Footer </p>
      </div>
    </main>
  )
}
export default Layout
