import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => { 

  const changeBackground = () => {
    const header = document.querySelector(".header");
    const top = document.querySelector(".to-the-top");
    if(window.scrollY > 0) {
      header.classList.add('active');
      top.classList.add('active');
    }
    else {
      header.classList.remove('active');
      top.classList.remove('active');
    }
  }
  window.addEventListener('scroll', changeBackground);



  class Menu extends React.Component {
    toggle = () => {
      
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");      
      navLinks.classList.toggle("open");
      
      navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
      })

      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
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
            {siteTitle}
      </h1>
      <Menu />
      <ul className="nav-links">
        <li><a className="link" href="#services">Usługi</a></li>
        <li><a className="link" href="#projects">Projekty</a></li>
        <li><a className="link" href="#about">O mnie</a></li>
        <li><a className="link" href="#contact">Kontakt</a></li>
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
