import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, Box, Typography, TextField, Button } from '@mui/material'
import { exerciseoption, fetchData } from '../utils/ExerciseData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({ setExercise, bodyPart, setbodyPart }) => {
  // initialising hooks...
  const [search, setsearch] = useState('')
  const [bodyParts, setbodyParts]=useState([])


  // Function..
  

  useEffect(() => {

    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoption)
      console.log(bodyPartsData)
      setbodyParts(['All', ...bodyPartsData])
  
    }
    fetchExerciseData()


  },[bodyPart] )

  const handleSeacrh = async () => {
    if (search) {
      const exercisedata = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoption);


      const searchedExercise =

        exercisedata.filter((exercises) =>
          exercises.name.toLowerCase().includes(search)
          || exercises.target.toLowerCase().includes(search)
          || exercises.bodyPart.toLowerCase().includes(search)
          || exercises.equipment.toLowerCase().includes(search)



        )


      setsearch('')
      setExercise(searchedExercise)

      window.scroll({top: 1800, behavior:'smooth'})




    }
  }

  // Returning OutPut...
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }}
        mb='50px' textAlign='center'
      >
        Awesome Exercises You <br />
        Should Know.
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={
            {
              input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
              width: { lg: '800px', xs: '350px' },
              backgroundColor: '#fff',
              borderRadius: '400px'
            }
          }
          height='76px'
          value={search}
          onChange={(e) => {
            setsearch(e.target.value.toLocaleLowerCase())
            
          }}
          placeholder='Search Exercises'
          type='text'
        >


        </TextField>
        <Button className='search-btn'
          sx={{
            bgcolor: "#ff2625",
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute'
          }}
          onClick={handleSeacrh}
        >
          Search
        </Button>

      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setbodyPart={setbodyPart}

        />
      </Box>

    </Stack>
  )
}

export default SearchExercises