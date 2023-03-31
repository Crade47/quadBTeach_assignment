import { useEffect, useState } from 'react'

interface MovieData{
    id:number,
    name:string,
    image: {
        medium: string,
        original: string
    },
    summary:string
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
        [key: string]: any // allows additional properties not defined in the interface
    }
}

const MainPage = () => {
    const [movieData, setMovieData] = useState<MovieData[]>([]);
    useEffect(() => {
        
        const getMovieData = async () => {
            const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
            const data:ShowData[] = await res.json();
            setMovieData(data.map((obj: ShowData)=>({
                id:obj.show.id,
                name:obj.show.name,
                image: obj.show.image,
                summary: obj.show.summary
            })))
            
        }

        getMovieData();
        
    }, [])

    console.log(movieData);
  return (
    <>
        <div className='bg-lightMain dark:bg-darkMain h-screen'>
        
        </div>
    </>
  )
}

export default MainPage