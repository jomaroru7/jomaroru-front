import { ToastContainer } from "react-toastify"
import AboutMe from "./components/aboutMe/AboutMe"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import Separator from "./components/Separator"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-main text-main">
      <Header />
      <Separator left={false}/>
      <AboutMe />
      <Separator left={true}/>
      <Experience/>
      <Separator left={false}/>
      <Projects/>
      <Separator left={true}/>
      <Contact/>
      <ToastContainer/>
    </div>
  )
}

export default App
