import { useEffect, useState } from 'react'
import Carousel from "framer-motion-carousel";
interface MovieData{
    id:number,
    name:string,
    image: {
        medium: string,
        original: string
    },
    summary:string
    genres: string[]
}

type ShowData = {
    show: {
        id: number,
        name: string,
        image: {
            medium: string,
            original: string
        },
        summary: string,
        genres:string[]
        [key: string]: any // allows additional properties not defined in the interface
        
    }
}

const MainPage = () => {
    const [movieData, setMovieData] = useState<MovieData[]>([]);
    useEffect(() => {
        
        const getMovieData = async () => {
            console.log("getting data...")
            const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
            const data:ShowData[] = await res.json();
            console.log(data);
            setMovieData(data.map((obj: ShowData)=>({
                id:obj.show.id,
                name:obj.show.name,
                image: obj.show.image,
                summary: obj.show.summary,
                genres: obj.show.genres
            })))
            
        }

        getMovieData();
    }, [])
    console.log(movieData)
  return (
    <>
        <div className='bg-lightMain dark:bg-darkMain h-screen'>
            <div className='h-[600px]'>
                <Carousel 
                    interval={3000} autoPlay={true} loop={true}
                    
                >
                    {
                        movieData.map((obj,i)=>{
                            if(obj.image){
                                return(
                                    <>
                                        <img
                                        draggable="false"
                                        src={obj.image.original}
                                        key={i}
                                        width="100%"
                                        alt={`${obj.name} carousel picture`}
                                        className='overflow-hidden fixed left-0 top-0 opacity-60'
                                        />
                                        <h1 
                                            className='
                                            text-5xl font-redHat font-bold text-white
                                            bottom-[10rem] left-7 absolute'
                                            key={obj.name}
                                        >
                                                {obj.name}
                                        </h1>
                                        {
                                           <h1 
                                           key={obj.id}
                                           className='
                                           text-white 
                                           bottom-[7rem] left-7 absolute 
                                           '
                                           >
                                               {obj.genres[0]}
                                           </h1>
                                        }
                                       
                                    </>  
                                )
                            }else{
                                return null
                            }
                        })
                    }
                </Carousel>
            </div>
        </div>
    </>
  )
}

export default MainPage