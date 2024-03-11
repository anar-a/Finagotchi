import NavBar from "./NavBar"
import Image from 'next/image'
import Background from '../../public/couplagoats.png'


export default function page(){
  return (
    
    <>
    <div>
    <NavBar />
    </div>
    <>
    <td>
      <div className="home-content">
       The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it 
      continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly,
       but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear 
       this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to 
       complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready,
        start.
      </div>
    </td>
    <>
    <td>
      <div className="home-picture">
        home
        <Image src={Background} alt="Placeholder"></Image>
      </div>
    </td>
    </>
    </>
    </>
  );
}