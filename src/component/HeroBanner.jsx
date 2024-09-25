import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' }
    }} position='relative' p='20px'>
      <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb={6}>
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3}  >
        check out the most effective exercises.
      </Typography>
      <Button variant='contained' color='error' href='#exercises'  >
        Explore exercises
      </Button>

      <img src={HeroBannerImage} alt='Banner' className='hero-banner-img' />
      <Typography fontWeight={600} color='#ff2625' sx={{
        opacity: 0.1,
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px'



      }} >
        Exercise
      </Typography>
    </Box>
  )
}

export default HeroBanner