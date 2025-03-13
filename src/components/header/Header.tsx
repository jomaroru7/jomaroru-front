import ThemeToggle from "./ThemeToggle"

function Header() {
  return (
    <div className="flex flex-col h-96 bg-secondary text-main">
      <div className="flex flex-row justify-between px-4 py-4">
        <h1 className="text-2xl">Jomaroru</h1>
        <ThemeToggle />
      </div>
      <div className="flex flex-row justify-center">
        <img className="w-32 rounded-full" src="./yo_cafe.png" alt="yo" />
        <p>
          Hi, I am José María, Chema for my friends.
        </p>
      </div>
    </div>
  )
}

export default Header