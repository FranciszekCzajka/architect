import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style/index.css"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="landing">
        <div className="left">
          <h2 className="main-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
          <h3 className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, odio voluptatum reprehenderit nemo animi maxime ipsa alias optio illum id laborum, ea repellat rem, perferendis iure doloremque modi eveniet!</h3>
          <a href="#" className="CTA">
            <span className="CTA-text">
              SPRAWDŹ MOJE USŁUGI
            </span>
          </a>
        </div>
        <div className="right">
        </div>
      </div>
      <div id="contact" className="contact">
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
              <div className="input w50">
                <input type="text" name="" required/>
                <span>Imię</span>
              </div>
              <div className="input w50">
                <input type="text" name="" required/>
                <span>Nazwisko</span>
              </div>
              <div className="input w50">
                <input type="text" name="" required/>
                <span>Adres E-Mail</span>
              </div>
              <div className="input w50">
                <input type="text" name="" required/>
                <span>Numer telefonu</span>
              </div>
              <div className="input w100">
                <textarea name="" id="" required></textarea>
                <span>Napisz wiadomość tutaj</span>
              </div>
              <div className="input w100">
                <input type="submit" value="WYŚLIJ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
