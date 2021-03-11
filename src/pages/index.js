import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style/index.css"
import photo from "../images/photo.jpg"
import project1 from "../images/project1.jpg"
import project2 from "../images/project2.jpg"
import project3 from "../images/project3.jpg"
import project4 from "../images/project4.jpg"
import project5 from "../images/project5.jpg"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div id="top" className="landing">
        <div className="left">
          <h2 className="main-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
          <h3 className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, odio voluptatum reprehenderit nemo animi maxime ipsa alias optio illum id laborum, ea repellat rem, perferendis iure doloremque modi eveniet!</h3>
          <a href="#services" className="CTA">
            <span className="CTA-text">
              SPRAWDŹ MOJE USŁUGI
            </span>
          </a>
        </div>
        <div className="right">
        </div>
      </div>
      <div id="projects" className="projects">  
        <h2 className="projects-name">Ostatnio wykonane projekty</h2>      
        <div className="card-1">
          <div className="left">
            <img class="picture" src={project1} alt="To ja"/>
          </div>
          <div className="right">
            <h3 className="project">
              Projekt 1
            </h3>
            <p className="project-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium neque impedit repellat, quis ipsum dignissimos, tempore eveniet rem quisquam dicta obcaecati soluta totam nostrum ad fugiat aut assumenda ipsa.
            </p>
          </div>
        </div>
        <div className="card-2">
          <div className="left">
            <img class="picture" src={project2} alt="To ja"/>
          </div>
          <div className="right">
            <h3 className="project">
              Projekt 2
            </h3>
            <p className="project-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium neque impedit repellat, quis ipsum dignissimos, tempore eveniet rem quisquam dicta obcaecati soluta totam nostrum ad fugiat aut assumenda ipsa.
            </p>
          </div>
        </div>
        <div className="card-1">
          <div className="left">
            <img class="picture" src={project3} alt="To ja"/>
          </div>
          <div className="right">
            <h3 className="project">
              Projekt 3
            </h3>
            <p className="project-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium neque impedit repellat, quis ipsum dignissimos, tempore eveniet rem quisquam dicta obcaecati soluta totam nostrum ad fugiat aut assumenda ipsa.
            </p>
          </div>
        </div>
        <div className="card-2">
          <div className="left">
            <img class="picture" src={project4} alt="To ja"/>
          </div>
          <div className="right">
            <h3 className="project">
              Projekt 4
            </h3>
            <p className="project-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium neque impedit repellat, quis ipsum dignissimos, tempore eveniet rem quisquam dicta obcaecati soluta totam nostrum ad fugiat aut assumenda ipsa.
            </p>
          </div>
        </div>
        <div className="card-1">
          <div className="left">
            <img class="picture" src={project5} alt="To ja"/>
          </div>
          <div className="right">
            <h3 className="project">
              Projekt 5
            </h3>
            <p className="project-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium neque impedit repellat, quis ipsum dignissimos, tempore eveniet rem quisquam dicta obcaecati soluta totam nostrum ad fugiat aut assumenda ipsa.
            </p>
          </div>
        </div>
      </div>
      <div id="about" className="about">
        <h2 className="about-me">O mnie</h2>
        <div className="card">
          <div className="left">
            <img class="picture" src={photo} alt="To ja"/>
          </div>
          <div className="right">
            <h3 className="i-am">
              Kim jestem?
            </h3>
            <p className="i-am-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium neque impedit repellat, quis ipsum dignissimos, tempore eveniet rem quisquam dicta obcaecati soluta totam nostrum ad fugiat aut assumenda ipsa.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
