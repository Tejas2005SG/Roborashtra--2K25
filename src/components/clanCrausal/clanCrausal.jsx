"use client";
import dynamic from 'next/dynamic'

const SlCarousel = dynamic(()=> import( '@shoelace-style/shoelace/dist/react/carousel'),{ssr:false});

const SlCarouselItem= dynamic(()=>import ('@shoelace-style/shoelace/dist/react/carousel-item'),{ssr:false});
import testImage from "@/images/img1.jpg"
import testImage2 from "@/images/img2.jpg"
import testImage3 from "@/images/img3.jpg"
import testImage4 from "@/images/img4.jpg"
import Image from "next/image"




const css = `
  .vertical {
    height: auto;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
   .imgSlContainer{
    width: 10rem;
    height:10rem;
    opacity: 0.8;
    }
`;

const clanCrausal = () => (
  <>
    <SlCarousel className="vertical" loop pagination orientation="horizontal" autoplay>
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
      {/* <SlCarouselItem>
        <Image
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/exa width={100} height={100}mples/carousel/valley.jpg"
        />
      </SlCarouselItem> */}
    </SlCarousel>
    <style>{css}</style>
  </>
);

export default clanCrausal;