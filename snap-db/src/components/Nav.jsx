import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  let navigate = useNavigate()

  return (
    <nav className="navbar">
      <h1>SNAP! DB Deckbuilder</h1>
      <div className='bckbtn' onClick={() => navigate(-1)}><img className="snap-logo"src="https://mobilegaminghub.com/wp-content/uploads/2022/05/Marvel-Snap.jpg" alt="snap-logo"/></div>
      <div className='nav-links'>
        <u1>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/'>ABILITIES</Link></li>
          <li><Link to='/'>DECK</Link></li>
          <li><Link to='/'>CARDS</Link></li>
          <li><Link to='/'>GAME PICS</Link></li>
        </u1>
      </div>
    </nav>
  )
}