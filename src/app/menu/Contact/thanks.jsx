import React from 'react';
import Btn1 from '@/components/Buttons/Btn1';
import events from '@/app/menu/page';
import start from '@/app/page';

function thanks() {
  return (
    <div className='thanksPage'>
      <div className="title text-2xl">Thank You</div>
      <p>Our co-ordinator will reach you as soon as possible</p>
        <Btn1 text={"Events"} link={events} />
        <Btn1 text={"Start"} link={start} />

    </div>
  )
}

export default thanks
