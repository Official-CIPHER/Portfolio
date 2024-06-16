import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer =()=>{
    return (
        <>
        <div>
           <hr />
           <footer className="py-12">
             <div className="max-w-screen-2xl container mx-auto px-2 md:px-20">
                 <div className="flex flex-col items-center justify-center">
                    <div className="flex space-x-4">
                       <a href="https://www.linkedin.com/in/vishal-kumar-b78151236/" target="_blank" className="hover:scale-110 duration-300"><FaLinkedin size={24}/></a>
                        
                        <a href="https://github.com/Official-CIPHER" target="_blank" className="hover:scale-110 duration-300"><FaGithub size={24}/></a>
                        
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                        <p className="text-sm">
                            &copy; 2024 Jai Shri Ram. All Rights Resevered.
                        </p>
                        <p className="text-sm">Supportive Partner ❤️ Vishal Kumar </p>
                    </div>
                 </div>
             </div>
           </footer>
        </div>
        </>
    )
};

export default Footer;