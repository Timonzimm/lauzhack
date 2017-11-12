import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import moment from 'moment'

import {
  Link
} from 'react-router-dom'

import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';

import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui-icons/AccountCircle';

import axios from 'axios';

class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { patients: [] }
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
        //this.setState({ patients: e.data.items });
      })
  }

  render() {
    return (
      <Grid item xs={2}>
        <List subheader={<ListSubheader>Patients</ListSubheader>} style={{padding: 20}}>
          {
            this.state.patients.map(patient => <Link to={`${patient.id}`} style={{ textDecoration: 'none' }} key={patient.id}>
              <ListItem button style={this.props.match.params.roomId == patient.id ? {backgroundColor: "rgba(0,0,0,0.1)"} : null}>
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary={patient.title} secondary={"Last activity: " + moment(patient.lastActivity).format('DD MMM. YYYY')} />
              </ListItem>
            </Link>)
          }
        </List>
      </Grid>
    );
  }
}

export default Patients