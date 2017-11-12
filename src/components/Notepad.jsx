import React from 'react'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

import axios from 'axios';


class Notepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }
  }
  componentWillReceiveProps(newProps) {
    axios.get(`https://api.ciscospark.com/v1/messages?roomId=${newProps.roomId}`,
      {
        "headers": {
          "Content-type": "application/json; charset=utf-8",
          "Authorization": "Bearer ZTNjOTNhZmQtOGIxYi00MDI1LTlhZjktM2RjMDdmNmU3YWRlMmNmOGYxMDAtYmQy"
        }
      }).then(messages => {
        this.setState({ messages:messages.data.items.filter(message => message.hasOwnProperty('text')) });
      })
  }
  componentDidMount() {
    axios.get(`https://api.ciscospark.com/v1/messages?roomId=${this.props.roomId}`,
      {
        "headers": {
          "Content-type": "application/json; charset=utf-8",
          "Authorization": "Bearer ZTNjOTNhZmQtOGIxYi00MDI1LTlhZjktM2RjMDdmNmU3YWRlMmNmOGYxMDAtYmQy"
        }
      }).then(messages => {
        this.setState({ messages: messages.data.items.filter(message => message.hasOwnProperty('text')) });
      })
  }

  render() {
    return <Grid item xs={8}><Paper style={{ padding: 20, margin: 30 }}>
      <Typography type="headline">Notepad</Typography>
      {
        this.state.messages.length > 0 ?
          this.state.messages.map(
            message => <Paper key={Math.random()} style={{ padding: 20, margin: 30 }} elevation={1}>{message.text.split("\n").map(item => <span key={Math.random()}>{item}<br /></span>)}</Paper>)
          : <Typography>The notepad is empty! :(</Typography>
      }

    </Paper></Grid>
  }
}

export default Notepad