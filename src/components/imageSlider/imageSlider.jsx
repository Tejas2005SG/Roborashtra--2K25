import React from 'react'
import "./imageSlider.css"
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://drive.google.com/uc?export=download&id=1vBh79vooDSr6iUyGbgGtUZWtYBE5wyKz",
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
    <div><ImageGallery items={images} /></div>
  )
}

export default imageSlider