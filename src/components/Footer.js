import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="20px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Completed on August 15, 2023 by Makeda Davis
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer