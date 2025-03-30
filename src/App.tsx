import AboutMe from "./components/aboutMe/AboutMe"
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import Separator from "./components/Separator"

function App() {
  const version="0.3.6";
  console.log(version);

  return (
    <div className="flex flex-col min-h-screen bg-main text-main">
      <Header />
      <Separator left={false}/>
      <AboutMe />
      <Separator left={true}/>
      <Experience/>
      <Separator left={false}/>
      <Projects/>
    </div>
  )
}

export default App
