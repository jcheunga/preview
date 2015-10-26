import React from 'react';
import Immutable from 'immutable';

import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';

// import styles from 'scss/components/_login';

export default class Login extends React.Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classNamees
   */
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    });
  }

  _onLoginSubmit = () => {
    const email = React.findDOMNode(this.refs.email).value;
    const password = React.findDOMNode(this.refs.password).value;
    UserActions.manuallogin({
      email: email,
      password: password
    });
  }

  render() {
    let renderedResult;
    if (this.state.user.get('authenticated')) {
      renderedResult = (<h1 className={styles.login__header}>You are logged in amigo</h1>);
    } else {
      if (this.state.user.get('isWaiting')) {
        renderedResult = (<h1 className={styles.login__header}>Waiting ...</h1>);
      } else {
        renderedResult = (
          <div className="container formplexy">        
          <div className="row">
            <div className="form-base col-lg-4 col-lg-push-4 col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-12">
              <header>
                <h1>Login</h1>
              </header>
              <section>
                <form>
                  <button className="btn social social-facebook"><i className="fa fa-facebook fa-lg"></i>&nbsp;with Facebook</button>
                  <a href="/auth/google" className="btn social social-google pull-right"><i className="fa fa-google-plus fa-lg"></i>&nbsp;with Google</a>
                  <div className="clearfix"></div>

                  <div className="input-group login-username"><div className="input-group-addon">Email</div><input type="email" ref="email" placeholder="Email" name="login-username" id="login-username"/><span aria-hidden="true" id="status-username" className="status-icon"></span></div>
                  <div className="input-group login-password"><div className="input-group-addon">Password</div><input type="password" ref="password" placeholder="Password" name="login-password" id="login-password"/><span aria-hidden="true" id="status-password" className="status-icon"></span></div>
                  
                  <div className="clearfix"></div>

                  <div className="row section-action">
                    <div className="col-xs-8">
                      <a className="forgotten-password-trigger custom-color">Forgotten password?</a>
                    </div>
                    <div className="col-xs-4">
                      <button className="btn primary pull-right custom-color-back" onClick={this._onLoginSubmit}>Login</button>
                    </div>
                  </div>
                </form>
              </section>
              <section className="forgotten-password">
                <form action="donothing" method="post" id="forgotten-password-form">
                  <div className="input-group col-sm-7 col-xs-12 login-forgotten-password"><input type="text" placeholder="Email" name="login-forgotten-password" id="login-forgotten-password"/><span aria-hidden="true" id="status-forgotten-password" className="status-icon"></span></div>
             
                  <button className="btn primary col-sm-4 col-sm-push-1 col-xs-12 custom-color-back">Send</button>
                </form> 
                <p>We'll send you e-mail with password reset.</p>
                <div className="clearfix"></div>
              </section>          
            </div>
          </div>
          <div className="row">
            <div className="account-switch col-lg-4 col-lg-push-4 col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-12 text-center">
              <p>Don't have an account? <a href="" className="custom-color">Sign up</a></p>
            </div>
          </div>
        </div>
        );
      }
    }
    return (
      <div>
        {renderedResult}
      </div>
    );
  }
}

Login.propTypes = { user: React.PropTypes.instanceOf(Immutable.Map) };
