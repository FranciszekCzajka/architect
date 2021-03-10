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
    </Layout>
  )
}

export default IndexPage
