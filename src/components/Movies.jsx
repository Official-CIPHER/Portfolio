import H3 from "../assets/h3.png";
import H4 from "../assets/h4.png";
import H5 from "../assets/h5.png";
import H6 from "../assets/h6.png";
import H7 from "../assets/h7.png";
import H8 from "../assets/h8.png";

import { Link } from "react-router-dom";

const Movies = () =>{

    const cardItem =[
        {
            id:1,
            logo:H3,
            name:"The Legend of Hanuman",
            desc:"Lord Mahadev is reborn as Hanuman to serve Lord Rama, and becomes a beacon of hope amidst the harrowing darkness.",
            actionBtn:{
                title:"Watch",
                link:"https://www.watcho.com/section/the-legend-of-hanuman"
            },
            actionBtn2:{
                padho:"Read",
                kaha:"https://en.wikipedia.org/wiki/The_Legend_of_Hanuman"
            }
        },
        {
            id:2,
            logo:H4,
            name:"Bal Hanuman",
            desc:"An evil crocodile demon is brought back to life to create chaos on Earth by a group of his followers. ",
            actionBtn:{
                title:"Watch",
                link:"https://www.dailymotion.com/video/x4qcspr"
            },
            actionBtn2:{
                padho:"Read",
                kaha:"https://in.bookmyshow.com/movies/bal-hanuman-2/ET00004692"
            }
        },
        {
            id:3,
            logo:H5,
            name:"Hanuman",
            desc:"Lord Hanuman is born to an apsara, Anjani, and leads a beautiful childhood that helps him become a mighty individual.",
            actionBtn:{
                title:"Watch",
                link:"https://www.youtube.com/watch?v=NSmzueYlFUY"
            },
            actionBtn2:{
                padho:"Read",
                kaha:"https://en.wikipedia.org/wiki/Hanuman_(2005_film)"
            }
        },
        {
            id:4,
            logo:H6,
            name:"HANU-MAN",
            desc:"In the tranquil village of Anjanadri, a petty thief stumbles upon Hanuman-like abilities.",
            actionBtn:{
                title:"Watch",
                link:"https://prmovies.show/hanu-man-2024-hindi-dubbed-Watch-online-full-movie/"
            },
            actionBtn2:{
                padho:"Read",
                kaha:"https://en.wikipedia.org/wiki/Hanu-Man"
            }
        },
        {
            id:5,
            logo:H7,
            name:"Adipurush",
            desc:"Raghav, the prince of the Ikshvaku dynasty from Kosala, tries to rescue his wife, Janaki, from the demon king Lankesh.",
            actionBtn:{
                title:"Watch",
                link:"https://www.dailymotion.com/video/x8moa96"
            },
            actionBtn2:{
                padho:"Read",
                kaha:"https://en.wikipedia.org/wiki/Adipurush"
            }
        },
        {
            id:6,
            logo:H8,
            name:"Sankat Mochan MahaVali Hanuman",
            desc:"The childhood and untold stories of Lord Hanuman, a devout disciple of Lord Rama.",
            actionBtn:{
                title:"Watch",
                link:"https://www.sonyliv.com/shows/sankatmochan-mahabali-hanuman-1700000109"
            },
            actionBtn2:{
                padho:"Read",
                kaha:"https://en.wikipedia.org/wiki/Sankat_Mochan_Mahabali_Hanumaan"
            }
        },
    ];

    return(
        <>
        <div 
           name="Movies" 
           className="max-w-screen-2xl container mx-auto px-2 md:px-20 mt-10">
           <div>
            <h1 className="text-3xl font-bold mb-5">Movies and Web series</h1>
            <span className="underline font-semibold">Featured Movies and Series</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
                {
                    cardItem.map(({id , logo , name , desc ,actionBtn ,actionBtn2})=>(
                        <div className="md:w-[300px] md:h-[325px] rounded-md border-[2px] shadow-lg p-1 cursor-pointer hover:scale-105 duration-300" key={id}>
                            <img src={logo} className="w-[300px] h-[120px] p-1 rounded-sm border-[2px]" alt=""/>
                            <div>
                                <div className="px-2 text-xl font-semibold mb-2 mt-1">{name}</div>
                                <div className="px-2 text-gray-600">{desc}</div>
                            </div>
                            <div className="flex justify-around px-2">
                                <button className="bg-blue-300 hover:bg-blue-800 cursor-pointer text-white rounded-md px-4 py-2"
                                >
                                    <a href={actionBtn.link} target="_blank">{actionBtn.title}</a>
                                   
                                </button>
                                <button className="bg-green-300 hover:bg-green-500 cursor-pointer text-white rounded-md px-4 py-2">
                                    
                                    <a href={actionBtn2.kaha} target="_blank">{actionBtn2.padho}</a>
                                    
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
           </div>
        </div>
        </>
    )
};

export default Movies;