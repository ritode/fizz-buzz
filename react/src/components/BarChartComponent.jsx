import React from 'react';
import { Box, Typography } from '@mui/material';
import Plot from 'react-plotly.js';

const BarChartComponent = ({data}) => {
  const chartData = [
    {
      x: data.categories,
      y: data.values,
      type: 'bar',
      marker: { color: 'rgb(99, 110, 250)' },
    },
  ];

  const layout = {
    margin: { t: 30 },
    height: 300,
    width: '100%',
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 2,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Bar Chart
      </Typography>
      <Plot data={chartData} layout={layout} />
    </Box>
  );
};

export default BarChartComponent;
