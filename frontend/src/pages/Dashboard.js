import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/common/Table/index";
import ChartComponent from "../components/common/Chart";
import { getTransGetAll } from "../actions/transactionAction";
import {
  Box,
  Grid 
}from '@mui/material';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);
  useEffect(() => {
    dispatch(getTransGetAll());
  }, []);
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
        flexGrow: 1,
        height: "100vh",
        margin: 'auto',
      }}
    >
    {transactions.length > 0 &&
      <Grid container spacing={2} sx={{ p:3}} style={{marginTop:'1px'}}>
        <Grid item xs={4} >
          <ChartComponent data={transactions}/>
        </Grid>
        <Grid item xs={8}>
          <Table data={transactions} />
        </Grid>
      </Grid>
    }
    </Box>
  )
}

export default Dashboard;
