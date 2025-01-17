import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material';




import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'


const App = () => {
  return (
    <Box width='400px' sx={{width:{xl:"1488px"}}} m='auto'>
       <Navbar/>
       
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/exercise/:id" element={<ExerciseDetails/>} />
        </Routes>
        
        <Footer/>
    </Box>
  )
}

export default App