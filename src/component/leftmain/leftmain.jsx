import React from 'react';
import Box from '../box/box';
import './leftmain.scss';

const Leftmain = (props) => {
  return (
    <div className='leftmain'>
        <div className="heading haveBtn">
            <span>PHIM BỘ MỚI</span>
            <div className="Button">
                <div className="Btn on" id="allFilm" >Tất cả phim</div>
                <div className="Btn off" id="isComing" >Sắp chiếu</div>
            </div>
        </div>
            
        <Box/>

        <div className="heading haveBtn">
            <span>PHIM LẺ MỚI</span>
        </div>

        <Box/>

        <div className="heading haveBtn">
            <span>PHIM HÀNH DỘNG</span>
        </div>

        <Box/>
    </div>
  )
}

export default Leftmain