/* @flow */
import React from 'react'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardActions from 'material-ui/lib/card/card-actions'
import CardText from 'material-ui/lib/card/card-text'
import Check from 'material-ui/lib/svg-icons/navigation/check'
import RaisedButton from 'material-ui/lib/raised-button'
import Firebase from 'firebase'
import CircularProgress from 'material-ui/lib/circular-progress'

class ReportBlock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: null
    }
  }
  render () {
    let progressDescription = (
      <div>
        <CircularProgress />
        <span style={{marginLeft: '10px'}}>讀取資料中...</span>
      </div>
    )
    if (this.state.progress) {
      progressDescription = (
        <div style={{fontSize: '20px'}}>
          {this.state.progress.description}
        </div>
      )
    }
    return (
      <div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '500px'}}>
        <Card>
          <CardHeader
            title="小憲憲"
            subtitle="status"
            avatar="http://lorempixel.com/100/100/nature/"
          />
          <CardText>
            {progressDescription}
          </CardText>
          <CardActions>
            <RaisedButton
              label="已讀完，點我！"
              primary
              icon={<Check />} />
          </CardActions>
        </Card>
      </div>
    )
  }

  componentDidMount () {
    const firebaseRef = new Firebase('https://bible-train.firebaseio.com/')
    const self = this
    firebaseRef.child('progress')
      .orderByChild('time')
      .equalTo(1459008000000)
      .on('child_added', (childSnapshot, prevChildKey) => {
        let progress = childSnapshot.val()
        if (progress) {
          self.setState({
            progress
          })
          firebaseRef.off()
        }
      })
  }
}

export default ReportBlock
