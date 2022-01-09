import { Grid, Typography } from '@mui/material';
import React from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";


const MyChart = () => {
  const data = [
    { name: "Q1", 2019: 1 },
    { name: "Q2", 2019: 2 },
    { name: "Q3", 2019: 3 },
    { name: "Q4", 2019: 4 },
    { name: "Q5", 2019: 5 },
    { name: "Q6", 2019: 6 },
    { name: "Q7", 2019: 7 },
    { name: "Q8", 2019: 8 },
  ];

  // const dataaa = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
  // ];
  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
      <>
        <Grid container spacing={3} style={{ marginTop: '50px' }}>
          <Grid item xs={12} md={4}>
          <Typography variant='h6' sx={{mr:10,color:'#1f6286'}}>Statements</Typography>
          <Typography variant='text' sx={{ml:20}}>AGEING STATEMENT</Typography>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="2019" fill="#184375" background={{ fill: "#eee" }} />
        </BarChart>
        </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{ ml: 20 }}>Partial Delivery Report</Typography>
            <Typography variant='h6' sx={{ ml: 20,mt:6}}>Shipped</Typography>
            <Typography variant='h6' sx={{ ml: 20 }}>72%(123)</Typography>
            <Typography variant='h6' sx={{ ml: 20,mt:6 }}>Balance</Typography>
            <Typography variant='h6' sx={{ ml: 20 }}>18%(13)</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        {/* <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={dataaa}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={dataaa}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart> */}
        </Grid>
      </Grid> </>
    );
};

export default MyChart;