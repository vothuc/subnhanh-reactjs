import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="box">
            <a href="#home"> home</a>
            <a href="#about"> Bản quyền</a>
            <a href="#popular"> Liên hệ ad</a>
            <a href="#menu"> Phim bộ</a>
            <a href="#order"> Phim lẻ</a>
            <a href="#blogs"> Phim chiếu rạp</a>
        </div>

        <div className="bottom">

            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer