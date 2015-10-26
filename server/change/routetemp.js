import UserStore from 'stores/UserStore';
import Login from 'components/Login';
import Logout from 'components/Logout';

function requireAuth(nextState, transition) {
  if (!UserStore.getState().user.get('authenticated')) {
    transition.to('/login', null, { nextPathname: nextState.location.pathname });
  }
}

<Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />

// NAVIGATION

import UserActions from 'actions/UserActions';

  _onLogout = () => {
    UserActions.logout();
  }

  { this.props.UserStore.user.get('authenticated') ? (
                  <li><Link to="/dashboard">Dashboard</Link></li>
                ) : (
                  null
                )}
                <li><Link to="/about">Join</Link></li>
                { this.props.UserStore.user.get('authenticated') ? (
                  <li><Link onClick={this._onLogout} to="/logout">Logout</Link></li>
                ) : (
                  <li><Link to="/login">Log in</Link></li>
                )}

// APP.JS

import TopicStore from 'stores/TopicStore';


        TopicStore: TopicStore,