import PieChart from "./PieChart";
import useGoogleCharts from './useGoogleCharts';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '300px',
  lineHeight: '60px',
}));

function WithHooks({ data }) {
  const google = useGoogleCharts();
  const [debit, setDebit] = useState([]);
  const [credit, setCredit] = useState([]);

  const debitCal = () => {
    data.forEach(element => {
      let idx = debit.indexOf(debit.find(item => item[0] === element.sender));
      if (debit.find((item) => item[0] === element.sender)) {
        debit[idx][1] += element.debit_amount;
        credit[idx][1] += element.credit_amount;
      }
      else {
        debit.push([element.sender, element.debit_amount]);
        credit.push([element.sender, element.credit_amount]);
      }
    });
    let sum_debit = 0;
    let sum_credit = 0;
    debit.forEach(element => {
      sum_debit += element[1];
    });
    credit.forEach(element => {
      sum_credit += element[1];
    });
    let debit_temp = [];
    let credit_temp = [];

    debit.forEach(element => {
      debit_temp.push([element[0], 10 * element[1] / sum_debit]);
    })
    credit.forEach(element => {
      credit_temp.push([element[0], 10 * element[1] / sum_credit]);
    })
    setDebit(debit_temp);
    setCredit(credit_temp);
  }

  useEffect(() => {
    debitCal();
  }, [data])

  return (
    <>
      <Item key={1} elevation={3}>
        <PieChart google={google} width={600} height={300} title={'Debit Amount View'} data={debit} />
      </Item>
      <Item key={2} elevation={3} sx={{ mt: 3 }}>
        <PieChart google={google} width={600} height={300} title={'Credit Amount View'} data={credit} />
      </Item>
    </>
  );
}

export default WithHooks;
