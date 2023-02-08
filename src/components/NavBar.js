import React from 'react'
import {RiHandCoinFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <Link to='/'>
        <div className="navbar">
            <RiHandCoinFill className='icon' />
            <h1> Coin <span className='purple'>Search</span></h1>
        </div>
    </Link>
  )
}

export default NavBar