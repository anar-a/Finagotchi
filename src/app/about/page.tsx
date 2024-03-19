import NavBar from "../NavBar"

export default function about() {
    return(
        <>
        <NavBar />
        <>
        <div className="wholethang">
            <div className="home-content md:h-screen flex flex-col justify-center items-center italic font-sans font-bold"> 
            The Finagotchi is a budgeting companion that assists users with their financial needs. This pal is an animal
            that the user takes care of via their budgeting habits. As the user gets better at budgeting the pal does better
            physically and mentally. The worse the user does at budgeting the worse the pal does to the point of death.
            </div>
        </div>
        </>
        </>
    )
}