import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Topics, DashboardPrompt, DashboardStats, Challenges} from './index'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className="bodyComponent content" id="userHome">
      <div>
        <Topics />
        <DashboardStats />
      </div>
      <Challenges />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
