import React from 'react';
import Image from 'next/image';
import Logo from '@/images/loaderLogo.png';
import './startPage.css';

function startPage() {
  return (
    <div className='startPage'>
      <div className="logo">
        <Image src={Logo} alt="logo" srcset="" />
      </div>
      <div className="title">ROBORASHTRA</div>
    </div>
  )
}

export default startPage;
