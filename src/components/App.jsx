import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('https://api.ciscospark.com/v1/rooms',
      {
        "headers": {
          "Content-type": "application/json; charset=utf-8",
          "Authorization": "Bearer ZTNjOTNhZmQtOGIxYi00MDI1LTlhZjktM2RjMDdmNmU3YWRlMmNmOGYxMDAtYmQy"
        }
      }).then(e => {
        this.setState({ patients: e.data.items.filter(room => room.title.startsWith("Patient")) });
      })
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>Menu</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={this.props.classes.paper}>Patient (rooms)</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={this.props.classes.paper}>6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={this.props.classes.paper}><p>Vertical timeline</p></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App)