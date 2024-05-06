import React from 'react';
import styles from './Filters.module.css';
import { Tab, Tabs, Box, Typography } from '@mui/material';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  }

  function a11yProps(index){
    return{
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  return (
    <div>
      <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label='song filter tabs' 
      TabIndicatorProps={{
        style : {
          backgroundColor: 'var(--css-primary)',
        },
      }}>

        {filters.map( (ele, idx) => (
          <Tab className={styles.tab} label={ele.label} {...a11yProps(idx)} />
        ))}
      </Tabs>
    </div>
  )
}

export default Filters