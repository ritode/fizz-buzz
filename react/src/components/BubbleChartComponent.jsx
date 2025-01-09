import React from 'react';
import { Box, Typography } from '@mui/material';
import Plot from 'react-plotly.js';

const BubbleChartComponent = ({data}) => {
  const chartData = [
    {
      x: data.categories,
      y: data.values,
      mode: 'markers',
      marker: {
        size: [20, 40, 25, 35, 50, 45, 30, 60, 50, 40],
        color: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        colorscale: 'Viridis',
      },
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
        Bubble Chart
      </Typography>
      <Plot data={chartData} layout={layout} />
    </Box>
  );
};

export default BubbleChartComponent;
