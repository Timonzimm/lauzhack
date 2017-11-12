import React from 'react'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Board from 'react-trello';

const data_board = {
  lanes: [
    {
      id: 'todo',
      title: 'To do',
      label: '2/2',
      cards: [
        { id: 'Card1', title: 'Analyze', description: 'Blood test', label: '30 mins' },
        { id: 'Card2', title: 'Measurement', description: 'Pulse rate', label: '20 mins' },
        { id: 'Card3', title: 'Other', description: 'Plaster cast removal', label: '30 mins' }
      ]
    },
    {
      id: 'doing',
      title: 'Doing',
      label: '2/2',
      cards: [
        { id: 'Card4', title: 'Logistic', description: 'Order medication', label: '60 mins' }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      label: '3/4',
      cards: [
        { id: 'Card5', title: 'Other', description: 'Prescribe medication', label: '20 mins' }
      ]
    }
  ]
}

import Pulse from './Pulse.jsx'
import TempPressure from './TempPressure.jsx'

const Dashboard = (props) => <Grid container xs={8}>
  <Grid item xs={8}>
    <Typography type="caption" gutterBottom align="center">Planning</Typography>
    <Board data={data_board} draggable style={{ backgroundColor: "transparent", height: "auto", width: "100%" }} />
  </Grid>
  <Grid item xs={4}>
    <Pulse />
  </Grid>
  <Grid item xs={12}>
    <TempPressure />
  </Grid>
</Grid>

export default Dashboard
