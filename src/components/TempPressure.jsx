import React from 'react'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class TempPressure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: '28 Sept. 2017', Temperature: 36.5 + getRandomIntInclusive(-1, 1), Pressure: 100 + getRandomIntInclusive(-5, 5), Rate: 75 + getRandomIntInclusive(-2, 2) },
                { name: '29 Sept. 2017', Temperature: 37.5 + getRandomIntInclusive(-1, 1), Pressure: 120 + getRandomIntInclusive(-5, 5), Rate: 72 + getRandomIntInclusive(-2, 2) },
                { name: '30 Sept. 2017', Temperature: 37.3 + getRandomIntInclusive(-1, 1), Pressure: 115 + getRandomIntInclusive(-5, 5), Rate: 71 + getRandomIntInclusive(-2, 2) },
                { name: '01 Oct. 2017', Temperature: 37.0 + getRandomIntInclusive(-1, 1), Pressure: 117 + getRandomIntInclusive(-5, 5), Rate: 65 + getRandomIntInclusive(-2, 2) },
                { name: '04 Oct. 2017', Temperature: 38.5 + getRandomIntInclusive(-1, 1), Pressure: 122 + getRandomIntInclusive(-5, 5), Rate: 68 + getRandomIntInclusive(-2, 2) },
                { name: '06 Oct. 2017', Temperature: 38.5 + getRandomIntInclusive(-1, 1), Pressure: 125 + getRandomIntInclusive(-5, 5), Rate: 64 + getRandomIntInclusive(-2, 2) },
                { name: '09 Oct. 2017', Temperature: 39.0 + getRandomIntInclusive(-1, 1), Pressure: 126 + getRandomIntInclusive(-5, 5), Rate: 67 + getRandomIntInclusive(-2, 2) },
                { name: '10 Oct. 2017', Temperature: 38.7 + getRandomIntInclusive(-1, 1), Pressure: 122 + getRandomIntInclusive(-5, 5), Rate: 70 + getRandomIntInclusive(-2, 2) },
                { name: '11 Oct. 2017', Temperature: 38.5 + getRandomIntInclusive(-1, 1), Pressure: 117 + getRandomIntInclusive(-5, 5), Rate: 70 + getRandomIntInclusive(-2, 2) },
                { name: '12 Oct. 2017', Temperature: 37.5 + getRandomIntInclusive(-1, 1), Pressure: 110 + getRandomIntInclusive(-5, 5), Rate: 73 + getRandomIntInclusive(-2, 2) },
            ]
        }
    }

    componentWillReceiveProps() {
        this.setState({
            data: [
                { name: '28 Sept. 2017', Temperature: 36.5 + getRandomIntInclusive(-1, 1), Pressure: 100 + getRandomIntInclusive(-5, 5), Rate: 75 + getRandomIntInclusive(-2, 2) },
                { name: '29 Sept. 2017', Temperature: 37.5 + getRandomIntInclusive(-1, 1), Pressure: 120 + getRandomIntInclusive(-5, 5), Rate: 72 + getRandomIntInclusive(-2, 2) },
                { name: '30 Sept. 2017', Temperature: 37.3 + getRandomIntInclusive(-1, 1), Pressure: 115 + getRandomIntInclusive(-5, 5), Rate: 71 + getRandomIntInclusive(-2, 2) },
                { name: '01 Oct. 2017', Temperature: 37.0 + getRandomIntInclusive(-1, 1), Pressure: 117 + getRandomIntInclusive(-5, 5), Rate: 65 + getRandomIntInclusive(-2, 2) },
                { name: '04 Oct. 2017', Temperature: 38.5 + getRandomIntInclusive(-1, 1), Pressure: 122 + getRandomIntInclusive(-5, 5), Rate: 68 + getRandomIntInclusive(-2, 2) },
                { name: '06 Oct. 2017', Temperature: 38.5 + getRandomIntInclusive(-1, 1), Pressure: 125 + getRandomIntInclusive(-5, 5), Rate: 64 + getRandomIntInclusive(-2, 2) },
                { name: '09 Oct. 2017', Temperature: 39.0 + getRandomIntInclusive(-1, 1), Pressure: 126 + getRandomIntInclusive(-5, 5), Rate: 67 + getRandomIntInclusive(-2, 2) },
                { name: '10 Oct. 2017', Temperature: 38.7 + getRandomIntInclusive(-1, 1), Pressure: 122 + getRandomIntInclusive(-5, 5), Rate: 70 + getRandomIntInclusive(-2, 2) },
                { name: '11 Oct. 2017', Temperature: 38.5 + getRandomIntInclusive(-1, 1), Pressure: 117 + getRandomIntInclusive(-5, 5), Rate: 70 + getRandomIntInclusive(-2, 2) },
                { name: '12 Oct. 2017', Temperature: 37.5 + getRandomIntInclusive(-1, 1), Pressure: 110 + getRandomIntInclusive(-5, 5), Rate: 73 + getRandomIntInclusive(-2, 2) },
            ]
        })
    }

    render() {
        return <div>
            <Typography type="caption" gutterBottom align="center" style={{ marginTop: "30px" }}>Temperature</Typography>
            <ResponsiveContainer height={200} width="100%">
                <LineChart data={this.state.data} syncId="anyId" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip labelFormatter={(o) => `Date: ${this.state.data[o].name}`} />
                    <Line type='monotone' dataKey='Temperature' stroke='#d35400' fill='#d35400' strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

            <Typography type="caption" gutterBottom align="center" style={{ marginTop: "30px" }}>Blood pressure</Typography>
            <ResponsiveContainer height={200} width="100%">
                <LineChart data={this.state.data} syncId="anyId" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip labelFormatter={(o) => `Date: ${this.state.data[o].name}`} />
                    <Line type='monotone' dataKey='Pressure' stroke='#e74c3c' fill='#e74c3c' strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

            <Typography type="caption" gutterBottom align="center" style={{ marginTop: "30px" }}>Pulse rate</Typography>
            <ResponsiveContainer height={200} width="100%">
                <LineChart data={this.state.data} syncId="anyId" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip labelFormatter={(o) => `Date: ${this.state.data[o].name}`} />
                    <Line type='monotone' dataKey='Rate' stroke='#8e44ad' fill='#8e44ad' strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>;
    }
}
export default TempPressure
