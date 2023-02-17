import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  let navigate = useNavigate()

  return (
    <nav className="navbar">
      <h1>SNAP! DB Deckbuilder</h1>
      <div className='bckbtn' onClick={() => navigate(-1)}><img className="snap-logo"src="https://mobilegaminghub.com/wp-content/uploads/2022/05/Marvel-Snap.jpg" alt="snap-logo"/></div>
      <div className='nav-links'>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/abilities'>ABILITIES</Link></li>
          <li><Link to='/decks'>DECK</Link></li>
          <li><Link to='/cards'>CARDS</Link></li>
          {/* <li><Link to='/'>GAME PICS</Link></li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Nav