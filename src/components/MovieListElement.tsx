import React from 'react'
import { MovieData } from '../routes/MainPage'
import { motion } from "framer-motion"


interface Props{
    data:MovieData
}
export default function MovieListElement({data}:Props) {

    const genres = data.genres.join(' | ')
    const cardVariant = {
        hidden:{
            
            scale: 0.1
        },
        hover:{ 
            scale: 1.175, 
            transition:{type:"spring", stiffness:200} 
        },

        tap:{scale: 0.9}
    }


  return (
    <>
        <motion.div className='relative cursor-pointer z-99 container'
        variants={cardVariant} 
        whileHover="hover"
        whileTap="tap"
        >

            <img src={data.image.medium} className='container-img hover:opacity-60 rounded-md' />
            <div className='infoCard h-[100%] z-40'>

                <h1 className='absolute text-xl pl-2 text-white font-redHat font-bold bottom-10'>
                    {data.name}
                </h1>
                <h1 className='absolute text-xs pl-2 text-white font-redHat font-semiboldbold bottom-6'>
                    {genres}
                </h1>
            </div>
        </motion.div>
    </>
  )
}
