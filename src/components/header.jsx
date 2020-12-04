import React from "react"
import "../styles/Header.scss"
//assets
import Logo from "../images/icons/clients/clients-logo3.png"

export default function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li className="login">Login</li>
          <li className="register">Get started</li>
        </ul>
      </nav>
    </header>
  )
}
