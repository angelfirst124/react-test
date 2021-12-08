import * as React from 'react';
import { useSelector } from 'react-redux';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Box,
  TextField,
  Button
} from '@mui/material';

const DateRange = (props) => {
  const [value, setValue] = React.useState([null, null]);
  const { transactions } = useSelector(state => state.transactions);
  const handleSearch = () => {
    let temp_rows = [];
    transactions.forEach(element => {
      let date = new Date(element.date);
      if (value[0] < date && date < value[1]) {
        temp_rows.push(element);
      }
    });
    props.setRows(temp_rows);
  };
  const handleRefresh = () => {
    props.setRows(transactions);
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          calendars={1}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        sx={{ ml: 3 }}
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
      <Button
        variant="contained"
        sx={{ ml: 3 }}
        onClick={handleRefresh}
      >
        <RefreshIcon />
      </Button>
    </>
  );
}

export default DateRange;