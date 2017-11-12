import React from 'react'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class Pulse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: '28 Sept. 2017', Activity: 3 + getRandomIntInclusive(-2, 5) },
                { name: '30 Sept. 2017', Activity: 5 + getRandomIntInclusive(-2, 5) },
                { name: '01 Oct. 2017', Activity: 1 + getRandomIntInclusive(-2, 5) },
                { name: '09 Oct. 2017', Activity: 2 + getRandomIntInclusive(-2, 5) },
                { name: '11 Oct. 2017', Activity: 7 + getRandomIntInclusive(-2, 5) },
                { name: '12 Oct. 2017', Activity: 4 + getRandomIntInclusive(-2, 5) },
            ]
        }
    }

    componentWillReceiveProps() {
        this.setState({
            data: [
                { name: '28 Sept. 2017', Activity: 3 + getRandomIntInclusive(-2, 5) },
                { name: '30 Sept. 2017', Activity: 5 + getRandomIntInclusive(-2, 5) },
                { name: '01 Oct. 2017', Activity: 1 + getRandomIntInclusive(-2, 5) },
                { name: '09 Oct. 2017', Activity: 2 + getRandomIntInclusive(-2, 5) },
                { name: '11 Oct. 2017', Activity: 7 + getRandomIntInclusive(-2, 5) },
                { name: '12 Oct. 2017', Activity: 4 + getRandomIntInclusive(-2, 5) },
            ]
        })
    }

    render() {
        return <Grid>
            <Typography type="caption" gutterBottom align="center">Activity pulse</Typography>
            <ResponsiveContainer height={100} width="100%">
                <LineChart data={this.state.data} style={{ marginTop: "30px" }} >
                    <Tooltip labelFormatter={(o) => `Date: ${this.state.data[o].name}`} />
                    <Line type='monotone' dataKey='Activity' stroke='#448aff' strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </Grid>;
    }
}

export default Pulse
