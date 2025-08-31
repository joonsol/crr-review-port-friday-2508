import React from 'react'
import footer from "../utils/footer"
import "./styles/Footer.scss"
const Footer = () => {
  return (
      <footer className="Footer">
      <div className="inner">
        <div className="left">
          <img src={footer.brand.logo} alt={footer.brand.name} className="logo" />
          <p>{footer.brand.copy}</p>
        </div>
        <nav className="links">
          {footer.links.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              <span className="material-icons">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer