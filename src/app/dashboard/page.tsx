import Image from 'next/image'
import Background from '../../../public/pixelArt.jpeg';
import Carousel from '@/components/dashboardComponents/carousel';
import Menu from '@/components/dashboardComponents/menu';
import {Button} from '@nextui-org/react'
import AddIcon from '../../../public/buttonIcons/add-64.png';

export default function dashboard() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image 
        src={Background}
        alt="Background Image with Pet"
        layout="fill"
        objectFit='cover'>
      </Image>
      <div className = "flex h-full">
        <div className = "p-9 my-40">
          <Menu></Menu>
        </div>
        <div className="py-9 pl-28 pr-7">
          <Carousel></Carousel>
        </div>
        <Button 
          className="bg-gradient-to-tr from-blue-600 to-purple-600 mt-15"
          style={{maxWidth: '3.75rem', maxHeight: '3.75rem', minWidth: '3.75rem', minHeight: '3.75rem'}}
          radius='full'>
          <Image src={ AddIcon } width={ 100 } alt="Add Icon for Add a Budget Button"></Image>
        </Button>
      </div>
    </div>
  )
}