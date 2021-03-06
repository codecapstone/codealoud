import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Route, Link, Switch} from 'react-router-dom'
import {logout, clearInput, clearSelectedChallenge} from '../store'
import {Login, Signup} from './AuthForm'

const Navigation = ({handleClick, isLoggedIn, email}) => (
  <nav id="navigation">
    <i className="far fa-comments" />
    <div id="codeAloudNameDiv">
      <Link to="/">
        <img id="logo" src="https://i.imgur.com/qeRJ1zZ.png" />
      </Link>
    </div>
    {isLoggedIn ? (
      <div className="navLinks">
        {/* The navbar will show these links after you log in */}

        <Link to="/home">Home</Link>
        <Link to="/instructions">Instructions</Link>
        <Link to="/challenges">Challenges</Link>
        <Link to="/lessons">Lessons</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    ) : (
      <div className="linksAndLogin">
        <div className="navLinks">
          {/* The navbar will show these links before you log in */}
          <Link to="/instructions">Instructions</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    )}
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
      dispatch(clearInput())
      dispatch(clearSelectedChallenge())
    }
  }
}

export default connect(mapState, mapDispatch)(Navigation)

/**
 * PROP TYPES
 */
Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
