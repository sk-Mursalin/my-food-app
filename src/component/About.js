import aboutImage from "../assets/images/about.png"
const About = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-5 mt-16">
            <div className="flex align-middle justify-between about">
                <div className="w-[610px] flex flex-col gap-4 about-content">
                    <h1 className="font-semibold text-7xl text-size">Welcome to<br/>The world of</h1>
                    <h1 className="font-semibold text-4xl text-size2 bg-amber-500 pt-2 pb-3 rounded-lg text-white w-[350px]">Tasty & Fresh Food</h1>
                    <h2 className="font-medium text-2xl">"Better you will feel if you eat a <span className="text-yellow-500">Burger King</span> healthy meal"</h2>
                </div>
                <div className="w-[500px] about-content">
                    <img  className="max-w-full"src={aboutImage}/>
                </div>
            </div>
        </div>
    )
}

export default About;