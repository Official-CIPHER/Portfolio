import { FaHistory } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { SiStudyverse } from "react-icons/si";
import { AiFillPicture } from "react-icons/ai";

import { ReactTyped } from "react-typed";

import H2 from "../assets/h2.png"

const Home = () => {
    return (
        <>
        {/* left side */}
            <div 
               name="Home" 
               className="max-w-screen-2xl container mx-auto px-2 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        {/* left */}
                        <span className="text-xl font-semibold">Jai Shri Ram</span>
                        <div className="flex space-x-2 text-2xl md:text-4xl font-bold">
                            <h1>Hello, I'm</h1>
                            {/* <span className="text-orange-600">Hanuman</span> */}
                            <ReactTyped
                                className="text-orange-600"
                                strings={["Hanuman","Maruti","Bajrangabali","Anjaneya"]}
                                typeSpeed={150}
                                backDelay={200}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">Lord Hanuman ji is a Hindu god and a central character in the Ramayana.
                            He is a half-monkey, half-human deity who is known for his strength,
                            powers, and devotion to Rama. Hanuman is also known as Maruti, Bajrangabali,
                            and Anjaneya.</p>
                        <br />
                        {/* social media icons */}
                        <div className="flex flex-col items-center md:items-start">
                            <h1 className="text-xl font-semibold">Presence </h1>
                            <ul className="flex space-x-5 text-2xl mt-3">
                                <li className="cursor-pointer hover:scale-105 duration-300">
                                   
                                   <a href="https://en.wikipedia.org/wiki/Hanuman" target="_blank"> <FaHistory /></a>
                                </li>
                                <li className="cursor-pointer hover:scale-105 duration-300">
                                    
                                    <a href="https://www.onindianpath.com/the-most-powerful-hindu-god-hanuman-ji-and-things-to-learn-from-him/" target="_blank"><ImPower /></a>
                                </li>
                                <li className="cursor-pointer hover:scale-105 duration-300">
                                    
                                    <a href="https://foursidestv.com/en/lord-hanuman-quotes-to-help-you-discover-your-inner-strength/" target="_blank"><SiStudyverse /></a>
                                </li>
                                <li className="cursor-pointer hover:scale-105 duration-300">
                                    
                                    <a href="https://in.pinterest.com/pin/god-wallpapers--3870349672304220/" target="_blank"><AiFillPicture /></a>
                                </li>
                            </ul>
                        </div>
                    </div>


        {/* right side */}
                    <div className="md:w-1/2 md:ml-48 md:mt-16 mt-8 ml-12 mr-12 order-1">
                        <img className="rounded-full md:h-[350px] md:w-[350px]" src={H2} alt="Lord Hanuman" />
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
};

export default Home;