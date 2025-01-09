import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const CardComponent = ({content}) => {
    const defaultContent = {
        title: 'Title',
        description: 'A suitable description',
        cost: '$1000.0 M',
        change: '+100.0%',
      };
    const { title, description, cost, change } = { ...defaultContent, ...content };
  const pos = change[0]==='+';
    return (
    <Box
          sx={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            padding: 2,
            margin: 1,
            textAlign: 'center',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="p">{description}</Typography>
          <Typography variant="h5">{cost}</Typography>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          {pos?<ArrowDropUpIcon style={{color:'green'}}/>:<ArrowDropDownIcon style={{color:'red'}}/>}
          <Typography variant="h7" color={pos?'green':'red'}>{change.slice(1)}</Typography>
            </Box>
        </Box>
  )
}

export default CardComponent