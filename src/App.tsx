import AboutMe from "./components/aboutMe/AboutMe"
import Header from "./components/header/Header"
import Separator from "./components/Separator"

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-main text-main">
      <Header />
      <Separator left={false}/>
      <AboutMe />
    </div>
  )
}

export default App
