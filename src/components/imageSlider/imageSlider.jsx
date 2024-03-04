import React from 'react'
import "./imageSlider.css"
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    fullscreen: false,
    orignalHeight: 250,
    orignalWidth: 250
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    fullscreen: false,
    orignalHeight: 250,
    orignalWidth: 250
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    fullscreen: false,
    orignalHeight: 250,
    orignalWidth: 250
  },
];

function imageSlider() {
  return (
    <div className='imageSlider'><ImageGallery items={images} /></div>
  )
}

export default imageSlider