import NavBar from "../NavBar"
import Image from 'next/image'
import Background from '../../../public/OtherForestPixelArt.png';
import {Card} from '@nextui-org/react';

export default function about() {
    return(
        <>
        <NavBar />
        <>
        <div className="abouttab">
        <Card className="bg-black h-33 bg-opacity-50 text-white">
            <div className="home-content md:h-screen flex flex-col justify-center items-center italic font-sans font-bold"> 
            The Finagotchi is a budgeting companion that assists users with their financial needs. This pal is an animal
            that the user takes care of via their budgeting habits. As the user gets better at budgeting the pal does better
            physically and mentally. The worse the user does at budgeting the worse the pal does to the point of death.
            </div>
        </Card>
        <Image
          src={Background}
          alt="Background Image"
          className="pixelart"
          fill={true}
        />
        </div>
        </>
        </>
    )
}