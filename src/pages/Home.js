import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../component/SearchExercises'
import Exercises from '../component/Exercises'
import HeroBanner from '../component/HeroBanner'

const Home = () => {
  const[Exercise,setExercise]=useState([])
  const [bodyPart,setbodyPart]=useState('All')
  return (
    
    <Box>
    {
      console.log(bodyPart)
    }
      <HeroBanner/>
      <SearchExercises 
        
        setExercise={setExercise}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}

      />
      <Exercises
      
         setExercise={setExercise}
         Exercise={Exercise}
        bodyPart={bodyPart}
        
      />
    </Box>
  )
}

export default Home