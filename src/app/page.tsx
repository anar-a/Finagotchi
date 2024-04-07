import NavBar from "./NavBar"
import Image from 'next/image'
import Background from '../../public/animations/IdleAnimation.gif'


export default function page(){
  return (
    
    <>
    <div>
      <NavBar />
    </div>
    <>
    <div className="wholethang h-screen grid grid-rows-2 md:grid-cols-2">
    <div className="home-content md:h-screen flex flex-col justify-center items-center font-sans font-bold">
      <div>
        <h1 className="text-5xl  italic ">
          Change your relationship with money
        </h1>
      </div>
      <div className="my-10">
       Finagotchi is a new way of budgeting, combining classic budgeting with tamogtchi. Your budgeting habits directly impact
       your new friend based on how much you are able to stick to your good budgeting habits. Sign up today!
      </div>
    </div>
      <div className="home-picture md:h-screen flex flex-col justify-center items-center font-sans font-bold">
        <div>
          <Image src={Background} alt="Placeholder" width={600} height={600}></Image>
        </div>
        <div className="my-4">
          <p>
            This is your starting finagotchi, they are your loyal companion and they rely on you to care for them with your financial
            habits. Do not fail them.
          </p>
        </div>
      </div>  
    </div>
    <>
    </>
    </>
    </>
  );
}