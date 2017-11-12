import React from 'react'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: '28 Sept. 2017', Temperature: 36.5, Pressure: 100, Rate: 75},
    { name: '29 Sept. 2017', Temperature: 37.5, Pressure: 120, Rate: 72},
    { name: '30 Sept. 2017', Temperature: 37.3, Pressure: 115, Rate: 71},
    { name: '01 Oct. 2017', Temperature: 37.0, Pressure: 117, Rate: 65},
    { name: '04 Oct. 2017', Temperature: 38.5, Pressure: 122, Rate: 68},
    { name: '06 Oct. 2017', Temperature: 38.5, Pressure: 125, Rate: 64},
    { name: '09 Oct. 2017', Temperature: 39.0, Pressure: 126, Rate: 67},
    { name: '10 Oct. 2017', Temperature: 38.7, Pressure: 122, Rate: 70},
    { name: '11 Oct. 2017', Temperature: 38.5, Pressure: 117, Rate: 70},
    { name: '12 Oct. 2017', Temperature: 37.5, Pressure: 110, Rate: 73},
  ];

const TempPressure = () => <div>
    <Typography type="caption" gutterBottom align="center" style={{ marginTop: "30px" }}>Temperature</Typography>
    <ResponsiveContainer height={200} width="100%">
        <LineChart data={data} syncId="anyId" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <YAxis domain={['dataMin', 'dataMax']} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip labelFormatter={(o) => `Date: ${data[o].name}`} />
            <Line type='monotone' dataKey='Temperature' stroke='#d35400' fill='#d35400' strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
    
    <Typography type="caption" gutterBottom align="center" style={{ marginTop: "30px" }}>Blood pressure</Typography>
    <ResponsiveContainer height={200} width="100%">
        <LineChart data={data} syncId="anyId" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <YAxis domain={['dataMin', 'dataMax']} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip labelFormatter={(o) => `Date: ${data[o].name}`} />
            <Line type='monotone' dataKey='Pressure' stroke='#e74c3c' fill='#e74c3c' strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
    
    <Typography type="caption" gutterBottom align="center" style={{ marginTop: "30px" }}>Pulse rate</Typography>
    <ResponsiveContainer height={200} width="100%">
        <LineChart data={data} syncId="anyId" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <YAxis domain={['dataMin', 'dataMax']} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip labelFormatter={(o) => `Date: ${data[o].name}`} />
            <Line type='monotone' dataKey='Rate' stroke='#8e44ad' fill='#8e44ad' strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
</div>

export default TempPressure
