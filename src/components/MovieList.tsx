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
            <h1 className='text-3xl font-bold dark:text-darkFont p-10 text-center'>Movies at Glance</h1>
            <div className='h-[1px] bg-black dark:bg-darkSecond w-[50%] mx-auto -mt-7 mb-10'></div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-11 p-6 ml-[10%] mr-[5%]'>
                {moviesData.map((obj:MovieData,i:number)=>{
                    if(obj.image){
                        return(
                                <MovieListElement data={obj} key={i}/>
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
