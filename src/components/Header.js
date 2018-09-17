import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = (props) => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link test-id="home-button" to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link test-id="login-button" to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link test-id="signup-button" to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = (props) => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li test-id="home-button" className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li test-id="editor-button" className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose" />
&nbsp;New Post
          </Link>
        </li>

        <li test-id="settings-button" className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a" />
&nbsp;Settings
          </Link>
        </li>

        <li test-id="profile-button" className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link"
          >
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
