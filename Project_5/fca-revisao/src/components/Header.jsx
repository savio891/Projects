import React from "react";
import './styles/Header.css'
import Logo from '../img/logo.png'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="nav-bar">
        <a className="navbar-brand text-light" href="#">
          FCA Group
        </a>
        <div className="img-nav">
          <img src={Logo} className="img-custom"></img>
        </div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Pesquisar"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Pesquisar
            </button>
          </form>
          <form action="" className="form-inline my-2 my-lg-0">
            <div className="auth-bar">
              <button type="button" className="btn btn-light">Login</button>
              <button type="button" className="btn btn-secondary">Logout</button>
            </div>
          </form>
      </nav>
    </>
  );
}
