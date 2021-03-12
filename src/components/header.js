import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => { 

  class Menu extends React.Component {
    toggle = () => {

      const hamburger = document.querySelector(".hamburger")
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");      
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
      
      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
          hamburger.classList.remove("active");
        })
      });
    }

    render() {
      return (
        <div className="hamburger" onClick={this.toggle} role="button">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      );
    }
  } 



  return(    
    <header className="header">
      <h1 className="title">
        <a className="top-link" href="#top">
              {siteTitle}
              
        </a>
      </h1>
      <Menu />
      <ul className="nav-links">
        <li className="list-link"><a className="link" href="#services">Usługi</a></li>
        <li className="list-link"><a className="link" href="#projects">Projekty</a></li>
        <li className="list-link"><a className="link" href="#about">O mnie</a></li>
        <li className="list-link"><a className="link" href="#contact">Kontakt</a></li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
