import mainLogo from '../../public/mainLogo.png'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom';

export default function Root() {
    const [isDark, setIsDark] = useState<boolean>(true); 

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

    return(
        <>
            <div className="
                flex
                items-center justify-between
                p-5 
                dark:text-white dark:bg-darkMain">
                <img 
                    src={mainLogo} 
                    alt="logo"
                    className='w-12'
                />

                <h1 className='
                mx-auto 
                font-extrabold text-2xl text-center font-redHat dark:text-darkFont'>
                    Movie Guide
                </h1>

                <button onClick={handleTheme} className='text-xl'>
                    {
                    isDark ? 
                        <FontAwesomeIcon icon={faSun} style={{color: "#f5f1e0",}} />
                        :
                        <FontAwesomeIcon icon={faMoon} style={{color: "#828c9b",}}/>
                    }
                </button>

            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}