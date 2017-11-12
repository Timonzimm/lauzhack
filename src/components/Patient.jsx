import React from 'react';
import Grid from 'material-ui/Grid';

import Dashboard from './Dashboard.jsx'
import TL from './TL.jsx'
import Notepad from './Notepad.jsx'


class Patient extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Grid container xs={10} spacing={16}>
        {this.props.value === 0 ? <Dashboard roomId={this.props.match.params.roomId} /> : <Notepad roomId={this.props.match.params.roomId} />}
        <Grid item xs={4}><TL roomId={this.props.match.params.roomId} /></Grid>
    </Grid>;
  }
}

export default Patient