import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Movies from "./components/Movies"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast"

function App() {
  
  return(
    <>
    <div>
    <Nav/>
    <Home/>
    <About/>
    <Movies/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App
