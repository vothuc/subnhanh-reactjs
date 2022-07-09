import React from 'react';
import Leftmain from '../leftmain/leftmain';
import Rightmain from '../rightmain/rightmain';
import './main.scss';


const Main = () => {

  return (
    <div className='main'>
        <Leftmain />
        <Rightmain/>
    </div>
  )
}

export default Main