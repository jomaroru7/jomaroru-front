import AboutMe from "./components/aboutMe/AboutMe"
import Header from "./components/header/Header"

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-secondary text-main">
      <Header/>
      <AboutMe/>
    </div>
  )
}

export default App
