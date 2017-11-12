import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { access_token: "" }

    this.handleChange = this.handleChange.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  signIn(e) {
    e.preventDefault();
    this.props.set_token(this.state.access_token);
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <form onSubmit={this.signIn}>
            <FormControl fullWidth>
              <InputLabel htmlFor="access_token">Access token</InputLabel>
              <Input
                id="access_token"
                value={this.state.access_token}
                onChange={this.handleChange('access_token')}
              />
            </FormControl>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default Root