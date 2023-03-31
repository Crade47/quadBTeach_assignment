import { useState, useEffect } from "react"

function App() {

  const [isDark, setIsDark] = useState(true); 

  useEffect(() => {
    if (isDark){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])
  
  const handleTheme = () =>{
    setIsDark(isDark=>!isDark)
  }

  return (
    <div className="dark:text-white dark:bg-black">
      
    </div>
  )
}

export default App
