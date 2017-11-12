import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import axios from 'axios';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import TextSMS from 'material-ui-icons/Textsms';
import { groupBy, mapKeys, mapValues, forIn, flatten, sampleSize } from 'lodash';
import Promise from 'bluebird';
import Typography from 'material-ui/Typography';

import moment from 'moment';

const DEPARTMENTS = ["Radiology", "Cardiology", "Maternity", "Neurology"]
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
const styles = {
  chip: {
    margin: "4px",
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    boxShadow: 'none'
  },
};

class TL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  askWatson(text) {
    return axios.post(`http://128.179.194.232:3000/api`,
      {
        text: text,
        features: {
          entities: {
          },
          keywords: {
          }
        }
      })
  }

  processMessages(messages) {

    const features = messages.map(m => {
      return this.askWatson(m.text);
    });

    return Promise.all(features).then(fea => {
      let keys = fea.map(f => {
        let kk = f.data.keywords;
        kk = Object.values(kk).map(k => (k.text));
        return kk;
      });
      keys = keys.map((k, i) => {
        return {
          ts: messages[i].created,
          keys: k,
        }
      })

      let data = groupBy(keys, k => {
        const d = new Date(k.ts);
        return Math.floor(d.getTime() / 60000);
      });

      data = mapValues(data, d => {
        return flatten(d.map(x => (x.keys)));
      })
      this.setState({ messages: data });
    })
  }


  componentWillReceiveProps(newProps) {
    axios.get(`https://api.ciscospark.com/v1/messages?roomId=${newProps.roomId}`,
    {
      "headers": {
        "Content-type": "application/json; charset=utf-8",
        "Authorization": "Bearer NzhkNTdiMjgtNTA0YS00MGQ0LWI5NTUtNzBiN2I3Njg1NGQ4MGRmZWU3NWQtNjcz"
      }
    }).then(e => {
      this.processMessages(e.data.items);
    })
  }
  componentDidMount() {
    axios.get(`https://api.ciscospark.com/v1/messages?roomId=${this.props.roomId}`,
      {
        "headers": {
          "Content-type": "application/json; charset=utf-8",
          "Authorization": "Bearer NzhkNTdiMjgtNTA0YS00MGQ0LWI5NTUtNzBiN2I3Njg1NGQ4MGRmZWU3NWQtNjcz"
        }
      }).then(e => {
        this.processMessages(e.data.items);
      })
  }
  render() {
    return (<Paper style={{ padding: 20, margin: 30, paddingRight: 50 }}>
    <Typography type="headline" style={{paddingBottom: "30px"}}>Topics timeline</Typography>
      <Timeline>
        {Object.keys(this.state.messages).map(ts => (
          <TimelineEvent title={sampleSize(DEPARTMENTS, getRandomIntInclusive(1,3)).join(", ")}
            createdAt={moment(ts*60000).format('DD MMM. YYYY')}
            icon={<TextSMS />}
          >
            <div style={styles.wrapper}>
              {this.state.messages[ts].filter(d => d != 'patient').map(d => (
                <Chip style={styles.chip} label={d} />
              ))}
            </div>
          </TimelineEvent>
        ))}
      </Timeline>
      </Paper>
    );
  }
}

export default withStyles(styles)(TL)