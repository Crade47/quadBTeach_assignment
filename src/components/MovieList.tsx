import { useState } from 'react'
import { MovieData } from '../routes/MainPage';
import MovieListElement from './MovieListElement';

interface Props{
    moviesData: MovieData[];
}

export default function MovieList({moviesData}:Props) {
  return (
    <>
        <div className='bg-lightMain dark:bg-darkMain'>
            <h1 className='text-3xl dark:text-darkFont p-10 text-center'>Movies at Glance</h1>
            <div className='grid grid-cols-2 gap-11 p-6'>

                {moviesData.map((obj:MovieData,i:number)=>{
                    if(obj.image){
                        return(
                            <div >
                                <MovieListElement data={obj}/>
                            </div>
                        )
                    }else{
                        return null
                    }
                })}
            </div>
        </div>
    </>
  )
}
