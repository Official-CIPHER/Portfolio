import { useState } from "react";
import H1 from "../assets/H1.png";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-scroll";

const Nav =()=>{
    const[menu,setMenu] = useState(false);

    const navItems =[
        {
            id:1,
            item:"Home"
        },
        {
            id:2,
            item:"About"
        },
        {
            id:3,
            item:"Movies"
        },

        {
            id:4,
            item:"Contact"
        },
    ]

    return (
        <>
        {/* Desktop view */}
        <div className="max-w-screen-2xl container mx-auto px-2 md:px-20 h-16 shadow-md bg-blue-200 z-10 fixed top-0 left-0 right-0">
            <div className="flex justify-between items-center h-16 ">
                {/* left side */}
                <div className="flex space-x-2">
                    <img src={H1} alt="A Lord" className="h-14 w-14 rounded-full cursor-pointer" />
                    <h1 className="text-xl font-semibold cursor-pointer text-yellow-600">Hanuman <span className="text-orange-500">JI</span>
                    <p className="text-sm font-bold">A Lord</p>
                    </h1>
                </div>
                <div className="">
                    {/*right menu */}
                    <ul className="hidden md:flex space-x-10 text-xl text-gray-600 ">
                        {/* using mapping to map tha items */}
                        {navItems.map(({id,item}) =>(
                            <li key={id} className="hover:bg-blue-400 rounded-md px-4 py-1 hover:scale-105 duration-300 cursor-pointer">
                               
                                <Link to={item}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                > {item}</Link>
                                
                                </li>
                        ))}
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className="md:hidden hover:scale-105 duration-300">
                        {menu?<AiOutlineClose size={30}/>:<HiOutlineMenu size={30}/>}</div>
                </div>
            </div>
                {/* Mobile view */}

                {menu&& (
            <div className="bg-slate-200">
                
                <ul className="md:hidden flex flex-col items-center justify-center h-screen  space-y-4 text-2xl text-gray-600">
                        {/* <li className="hover:scale-105 duration-300 cursor-pointer hover:bg-blue-400 rounded-md px-4 py-2">Home</li>
                        <li className="hover:scale-105 duration-300 cursor-pointer  hover:bg-blue-400 rounded-md px-4 py-2">About</li>
                        <li className="hover:scale-105 duration-300 cursor-pointer  hover:bg-blue-400 rounded-md px-4 py-2">Contact</li> */}
                    {navItems.map(({id,item}) =>(
                            <li key={id} className="hover:bg-blue-400 rounded-md px-4 py-2 hover:scale-105 duration-300 cursor-pointer">
                                <Link 
                                onClick={()=>setMenu(!menu)}
                                to={item}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                > {item}</Link>
                            
                            </li>
                        ))}
                    
                    </ul>
            </div>

                )}

        </div>
        </>
    )
};

export default Nav;

