import React from 'react'
import Annyang from './Annyang'
import {keywordCheck} from '../utilFunctions'
import {getKeyWords, setApproach} from '../store'
import {connect} from 'react-redux'
import Prompt from './Prompt'
import Help from './Help'

export class Approach extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(said) {
    event.preventDefault()

    let [wordsGot, wordsNotGot] = keywordCheck(
      said,
      this.props.challenge.keywords
    )

    this.props.getKeyWords({
      gotKeywords: wordsGot,
      notGotKeywords: wordsNotGot
    })
    this.props.setApproach(said)
    this.props.history.push('/code')
  }
  render() {
    return (
      <div className="largeViewBorderCard">
        <Prompt />
        <div className="largeViewCard" id="promptAnnyang">
          <h3>Tell us how you'd solve the problem!</h3>
          <p>
            You can record your approach or type it, and you can edit your
            approach before hitting submit.
          </p>
          <Annyang handleSubmit={this.handleSubmit} />
        </div>
        <Help />
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

const mapDispatch = {getKeyWords, setApproach}

export default connect(mapState, mapDispatch)(Approach)
