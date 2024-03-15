import Image from 'next/image'
import Background from '../../../public/pixelArt.jpeg';
import Carousel from '@/components/dashboardComponents/carousel';
import Menu from '@/components/dashboardComponents/menu';

export default function dashboard() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image 
        src={Background}
        alt="Background Image with Pet"
        layout="fill"
        objectFit='cover'>
      </Image>

      {/* preserving this code snippet so that we are able to see what we did in order to get it to overlap */}
      {/* <h1 style={{ 
          zIndex: 1, 
          position: 'absolute', 
          top: '50%', left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'white' }}>
              Helllooooo
      </h1> */}
      <Carousel></Carousel>
      <Menu></Menu>
    </div>
  )
}