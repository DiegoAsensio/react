import React from 'react'
import CartWidget from './CartWidget'

function MyNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div>
        <img className='w-25' src={require('../img/logo.png')} alt="Logo" />
      </div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link fw-bold" aria-current="page" href="#">Botines de futbol</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" href="#">Running</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold">Casual</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold">Zapatos</a>
        </li>
      </ul>
      <div>
        <CartWidget items={0} />
      </div>
    </div>
  </div>
</nav>
  )
}

export default MyNavBar