import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDataRequest } from '../redux/productActions';
import AppBarComponent from '../components/AppBarComponent';
import TabsComponent from '../components/TabsComponent';
import CardComponent from '../components/CardComponent';
import TableComponent from '../components/TableComponent';
import BarChartComponent from '../components/BarChartComponent';
import BubbleChartComponent from '../components/BubbleChartComponent';
import { Box } from '@mui/material';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { cards, table, barChart, bubbleChart, loading, error } = useSelector(
    (state) => state.product
  );
  const [currentTab, setCurrentTab] = useState(0);

  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];

  const tabContent = tabLabels.map((_, index) => (
    <Box key={index}>
      {loading && <Box>Loading...</Box>}
      {error && <Box>Error: {error}</Box>}

      {!loading && !error && (
        <>
          <Box sx={{display:'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
            {cards.map((card, idx) => (
                <CardComponent content={card} key={idx} />
            ))}
          </Box>

          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{marginRight:2, width:'50%'}}>
              <TableComponent data={table} />
            </Box>

            <Box sx={{display:'flex',flexDirection:'column',flex:'1', width:'40%', gap:2}}>
              {barChart && barChart.categories.length > 0 && (
                  <BarChartComponent data={barChart} />
              )}
              {bubbleChart && bubbleChart.categories.length > 0 && (
                  <BubbleChartComponent data={bubbleChart} />
              )}
            </Box>
          </Box>
        </>
      )}
    </Box>
  ));

  // Fetch data on component mount or tab change
  useEffect(() => {
    dispatch(fetchProductDataRequest(currentTab + 1)); // Fetch data for the active tab
  }, [currentTab, dispatch]);

  const handleTabChange = (newTab) => {
    setCurrentTab(newTab); // Update the current tab
  };

  return (
    <>
      <AppBarComponent />
      <TabsComponent
        tabLabels={tabLabels}
        initialValue={0}
        onTabChange={handleTabChange}
      >
        {tabContent}
        </TabsComponent>
    </>
  );
};

export default DashboardPage;
