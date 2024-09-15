"use client";
import dynamic from 'next/dynamic'

const SlCarousel = dynamic(()=> import( '@shoelace-style/shoelace/dist/react/carousel'),{ssr:false});

const SlCarouselItem= dynamic(()=>import ('@shoelace-style/shoelace/dist/react/carousel-item'),{ssr:false});
import testImage from "@/images/img1.jpg"
import testImage2 from "@/images/img2.jpg"
import testImage3 from "@/images/img3.jpg"
import testImage4 from "@/images/img4.jpg"
import testImage5 from "@/images/BlazeTrophy.png"

import Image from "next/image"




const css = `

  
   .imgSlContainer{
    width: 10rem;
    height:10rem;
    opacity: 0.8;
    border-radius: 20px;
    }
`;

const clanCrausal = () => (
  <>
    <SlCarousel loop navigation pagination autoplay autoplayInterval={1}>
      <SlCarouselItem>
        <Image
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src={testImage}
 width={0} height={0}     className='imgSlContainer'   />
      </SlCarouselItem>
      <SlCarouselItem>
        <Image
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src={testImage2} width={0} height={0}
        />
      </SlCarouselItem>
      <SlCarouselItem>
        <Image
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src={testImage3} width={0} height={0}
        />
      </SlCarouselItem>
      <SlCarouselItem>
        <Image
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src={testImage4} width={0} height={0}
        />
      </SlCarouselItem>
       <SlCarouselItem>
        <Image
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src={testImage5} width={0} height={0}
        />
      </SlCarouselItem> 
    </SlCarousel>
    <style>{css}</style>
  </>
);

export default clanCrausal;