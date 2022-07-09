import React from 'react'
import './header.scss'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="logo" />
        <div className="navbar">
            <a href="" className="nav-item active">Home</a>
            <a href="" className="nav-item">Phim Bộ</a>
            <a href="" className="nav-item">Phim Lẻ</a>
            <a href="" className="nav-item">Quốc gia</a>
            <a href="" className="nav-item">thể Loại</a>
            <a href="" className="nav-item">Phim Chiếu Rạp</a>
        </div>
    </div>
  )
}

export default Header