import React from 'react'
import {connect} from 'react-redux'
import {fetchProblems, selectProblem} from '../store/problems'
import {addChallengeToStats} from '../store/userStats'
import {Link} from 'react-router-dom'

export class Challenges extends React.Component {
  constructor() {
    super()
    this.startProblem = this.startProblem.bind(this)
  }
  componentDidMount() {
    this.props.getProblems()
  }

  startProblem(userId, probId) {
    this.props.addProblemToStats(userId, probId)
    this.props.setProblem(probId)
  }

  render() {
    console.log('PROPS', this.props)
    return (
      <div className="content">
        <div className="userHomeCard">
          <h3>Pick Your Challenge!</h3>
          <br />
          <div>
            {this.props.problems.map(problem => (
              <div
                className="challengeLink"
                key={problem.id}
                onClick={() => this.startProblem(this.props.userId, problem.id)}
              >
                <Link to="/prompt">{problem.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id,
    problems: state.problems.all
  }
}

const mapDispatch = dispatch => {
  return {
    getProblems: () => dispatch(fetchProblems()),
    setProblem: id => dispatch(selectProblem(id)),
    addProblemToStats: (userId, probId) =>
      dispatch(addChallengeToStats(userId, probId))
  }
}

export const ChallengesView = connect(mapState, mapDispatch)(Challenges)

export default ChallengesView
