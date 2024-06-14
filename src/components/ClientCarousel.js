// clientcarousel
'use client';

import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';


const ClientCarousel = () => (
  <div style={{paddingTop:"60px", paddingBottom:"90px", width:"100%", height:"5500px"}}>
  <Carousel
    nextControlIcon={<div className='bg-blue-300 text-white p-3 rounded-full flex items-center justify-center transform -translate-y-1/2 top-1/2 absolute right-0'><FaArrowRight /></div>}
    previousControlIcon={<div className='bg-blue-300 text-white p-3 rounded-full flex items-center justify-center transform -translate-y-1/2 top-1/2 absolute left-0'><FaArrowLeft /></div>}
    withIndicators height={"100%"}
    loop
    autoplay={{ delay: 3000 }}
  >
    <Carousel.Slide>
      <div style={{ width: '100%', height: '900px', position: 'relative' }}>
        <Image
          src='/images/img1.jpg'
          fill
          style={{ objectFit: 'cover' }}
          alt='img1'
        />
      </div>
    </Carousel.Slide>
    <Carousel.Slide>
      <div style={{ width: '100%', height: '900px', position: 'relative' }}>
        <Image
          src='/images/img2.jpg'
          fill
          style={{ objectFit: 'cover' }}
          alt='img2'
        />
      </div>
    </Carousel.Slide>
  </Carousel>
  </div>
);

export default ClientCarousel;