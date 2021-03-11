import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../style/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
          {children}
          <a href="#top" className="to-the-top">
            Powrót na góre! 🡡
          </a>
        </main>
        <footer id="contact" className="contact">
          <h2 className="contact-me">Skontaktuj sie!</h2>
          <div className="container">
            <div className="contact-info">
              <h2 className="contact-text">Dane kontaktowe:</h2>
              <ul className="info">
                <li className="contact-details">
                  <span>Kod pocztowy, Miasto, ulica, numer</span>
                </li>
                <li className="contact-details">
                  <span>main@example.com</span>
                </li>
                <li className="contact-details">
                  <span>123 456 789</span>
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <h2 className="send-message">Wyślij wiadomość</h2>
              <div className="form">
                <div className="input half">
                  <input type="text" required/>
                  <span>Imię</span>
                </div>
                <div className="input half">
                  <input type="text" required/>
                  <span>Nazwisko</span>
                </div>
                <div className="input half">
                  <input type="text" required/>
                  <span>Adres E-Mail</span>
                </div>
                <div className="input half">
                  <input type="text" required/>
                  <span>Numer telefonu</span>
                </div>
                <div className="input full">
                  <textarea required></textarea>
                  <span>Wiadomość</span>
                </div>
                <div className="input full">
                  <input type="submit" value="WYŚLIJ" />
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
