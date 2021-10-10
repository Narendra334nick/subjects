import React from 'react';
import { Box, Typography } from '@mui/material';
import List from '../../Components/List/index';

export default function Index(props) {
  return (
    <Box>
      <List {...props} />
    </Box>
  );
}
