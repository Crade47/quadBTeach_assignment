import mainLogo from '../../public/mainLogo.png'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom';

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
                bg-lightMain
                dark:text-white dark:bg-darkMain">
                <Link to="/">
                    <img 
                        src={mainLogo} 
                        alt="logo"
                        className='w-12 md:w-[5.5rem]'
                    />
                </Link>
                <Link to="/">
                    <h1 className='
                    -ml-4
                    font-extrabold text-4xl sm:text-5xl lg:text-7xl text-center font-lobster dark:text-darkFont'>
                    Movie Guide
                    </h1>
                </Link>

                <button onClick={handleTheme} className='text-xl md:text-2xl lg:text-3xl'>
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