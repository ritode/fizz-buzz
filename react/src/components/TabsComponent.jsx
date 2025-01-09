import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent({ tabLabels, initialValue = 0, onTabChange, children }) {
    const [value, setValue] = React.useState(initialValue);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if (onTabChange) {
        onTabChange(newValue); // Notify parent about tab change
      }
    };
  
    return (
      <Box sx={{ width: '100%', margin: '10px' }}>
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="tabs example">
            {tabLabels.map((label, index) => (
              <Tab key={index} label={label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
  
        {React.Children.map(children, (child, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {child}
        </CustomTabPanel>
      ))}
      </Box>
    );
  }
  
  TabsComponent.propTypes = {
    tabLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    initialValue: PropTypes.number,
    onTabChange: PropTypes.func, // Callback for tab change
  };
  
