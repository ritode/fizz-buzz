import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'country', headerName: 'Country', width: 150 },
  { field: 'turnover', headerName: 'Turnover', width: 150 },
  { field: 'sales_margin', headerName: 'Sales Margin', width: 150 },
  { field: 'sales_margin2', headerName: 'Sales Margin 2', width: 150 },
];

const TableComponent = ({data}) => {
    const rowsWithId = data.map((item, index) => ({ id: index + 1, ...item }));
    console.log(data)
    return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 2,
        borderRadius: 2,
        boxShadow: 1,
        margin: 0.5
      }}
    >
      <Typography variant="h6" gutterBottom>
        Sales Data
      </Typography>
      <DataGrid rows={rowsWithId} columns={columns} />
    </Box>
  );
};
TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TableComponent;
