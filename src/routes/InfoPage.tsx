import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieData } from './MainPage';
export default function InfoPage() {
    let { movieid } = useParams();
    const movieId = Number(movieid);
    const unparsedData = localStorage.getItem("movieData");
    let movieData:MovieData | undefined;
    if (unparsedData !== null) {
        const data:MovieData[] = JSON.parse(unparsedData);
        movieData = data.find(movie => movie.id === movieId);
    }
    
    const genres = movieData?.genres.join(' | ')
  return (
    <>
        { movieData && 
            <div className='bg-lightMain dark:bg-darkMain grid grid-cols-1 lg:grid-cols-2 justify-center items-start h-screen   '>
                <div className='flex items-center justify-center flex-col my-auto'>

                    <img src={movieData.image.medium} alt={`${movieData.name}`}/>
                    <h1 className='dark:text-white font-redHat font-extrabold text-3xl mt-7'>   
                    {movieData.name}
                    </h1>
                    <h2 className='text-sm mt-2 dark:text-white'>
                    {genres}
                    </h2>
                    <div className='h-[1px] bg-black dark:bg-darkSecond w-[45%] mx-auto mt-5 mb-10'></div>
                </div>
                <div className='flex justify-center max-w-sm my-auto mx-auto'>
                    <p className='text-white font-redHat text-justify'>
                        {movieData.summary}
                    </p>
                    
                </div>
            </div>
        }
    </>
  )
}
