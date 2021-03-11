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
import service1 from "../images/service1.jpg"
import service2 from "../images/service2.jpg"
import service3 from "../images/service3.jpg"

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
      <div id="services" className="services">
        <h2 className="my-services">
          Czym sie zajmuję?
        </h2>
        <div className="services-list">
          <div className="service">
            <div className="up">
              <img className="picture" src={service1} alt="usługa 1"/>
            </div>
            <div className="down">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="service">
            <div className="up">
              <img className="picture zoom" src={service2} alt="usługa 2"/>
            </div>
            <div className="down">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="service">
            <div className="up">
              <img className="picture" src={service3} alt="usługa 3"/>
            </div>
            <div className="down">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <a className="go-deeper" href="#projects">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sprawdź moje projekty
        </a>
      </div>
      <div id="projects" className="projects">  
        <h2 className="projects-name">
          Ostatnio wykonane projekty
        </h2>      
        <div className="card-1">
          <div className="left">
            <img className="picture" src={project1} alt="Projekt 1"/>
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
            <img className="picture" src={project2} alt="Projekt 2"/>
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
            <img className="picture" src={project3} alt="Projekt 3"/>
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
            <img className="picture" src={project4} alt="Projekt 4"/>
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
            <img className="picture" src={project5} alt="Projekt 5"/>
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
        <a className="go-deeper" href="#about">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Dowiedź się kim jestem
        </a>
      </div>
      <div id="about" className="about">
        <h2 className="about-me">
          O mnie
        </h2>
        <div className="card">
          <div className="left">
            <img className="picture" src={photo} alt="To ja"/>
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
        <a className="go-deeper smaller-top-margin" href="#contact">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Skontaktuj sie ze mną
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
