import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyParts = ({ item, bodyPart, setbodyPart }) => {
  return (
    <Stack

      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={
        {
          borderTop: bodyPart ==item ? '4px solid #ff2625' : '',
          backgroundColor: 'fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px'

        }
      }
      onClick={
        ()=>{
         setbodyPart(item)
        }
      }
    >
      
      <img src={Icon} alt='dumbell' style={{ width: '40px', height: '40px' }} />
      <Typography fontSize='24px' fontWeight='600' color='#3a1212' textTransform='capitalize'
      >{item}</Typography>
    </Stack>
  )
}

export default BodyParts