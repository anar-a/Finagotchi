import NavBar from "./NavBar"
import Image from 'next/image'
import Background from '../../public/cat.png'


export default function page(){
  return (
    
    <>
    <div>
    <NavBar />
    </div>
    <>
    <td>
      <div className="home-content">
       The Finagotchi is a budgeting companion that assists users with their financial needs. This pal is an animal
       that the user takes care of via their budgeting habits. As the user gets better at budgeting the pal does better
       physically and mentally. The worse the user does at budgeting the worse the pal does to the point of death.
      </div>
    </td>
    <>
    <td>
      <div className="home-picture">
        <Image src={Background} alt="Placeholder"></Image>
      </div>  
    </td>
    </>
    </>
    </>
  );
}