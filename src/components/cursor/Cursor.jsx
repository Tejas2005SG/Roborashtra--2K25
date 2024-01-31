import React, {useEffect} from 'react'
import gsap from 'gsap/gsap-core'

const Cursor = ()=> {
  useEffect(()=>{
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('a');
    const cursorText = document.querySelectorAll('.cusror-text');

    const onMouseOver =(event)=>{
        const{clientX, clientY} = event;
        gsap.to(cursor,{x:clientX, y:clientY})
    }
    const onMouseEnterLink = ((event)=>{
        const link = event.target;
        if(link.classList.contains('view')){
            gsap.to(cursor,{scale:4})
            cursorText.style.display='block'
        }
        else{
            gsap.to(cursor,{scale:4})
        }
    })

    const onMouseLeaveLink = () =>{
        gsap.getProperty(cursor,{scale:1})
        cursorText.style.display = "none";
    }
    document.addEventListener('mousemove', onMouseMove)
    links.forEach((link)=>{
        link.addEventListener('mouseenter',onMouseEnterLink)
        link.addEventListener('mouseleave', onMouseLeaveLink)
    })
  })
  
    return (
    <div id='custom-cursor' className='custom-cursor'>
        <span className='cursor-text'>RoborRashtra</span>
      
    </div>
  )
}

export default Cursor
