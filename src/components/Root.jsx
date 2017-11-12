import React from 'react';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import Dashboard from 'material-ui-icons/Dashboard';
import Forum from 'material-ui-icons/Forum';
import AttachFile from 'material-ui-icons/AttachFile';

import { Route } from 'react-router-dom'

import Patient from './Patient.jsx'
import Patients from './Patients.jsx'
import SignIn from './SignIn.jsx'

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = { access_token: "ZTNjOTNhZmQtOGIxYi00MDI1LTlhZjktM2RjMDdmNmU3YWRlMmNmOGYxMDAtYmQy", value: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, value) {
    this.setState({ value });
  }

  render() {
    return !this.state.access_token ? <SignIn set_token={(token) => this.setState({ access_token: token })} /> :
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Route exact path="/" component={null} />
          <Route path="/:roomiId"
            render={() => (
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="accent"
                textColor="accent"
              >
                <Tab icon={<Dashboard />} label="Dashboard" />
                <Tab icon={<Forum />} label="Notepad" />
                <Tab icon={<AttachFile />} label="Notes" />
              </Tabs>
            )} />
        </Grid>

        <Route exact path="/" component={Patients} />
        <Route exact path="/" render={() => <Typography type="display1" style={{ padding: 20, margin: 30 }}>Please choose a patient in the left list.</Typography>} />

        <Route path="/:roomId" component={Patients} />
        <Route path="/:roomId" render={(routeProps) => <Patient {...routeProps} value={this.state.value} />} />
      </Grid>;
  }
}

export default Root