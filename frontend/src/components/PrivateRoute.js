import React from 'react';
import {Route} from 'react-router-dom';
import auth from '../utils/auth';

function PrivateRoute({ children, ...rest }) {

    const handleRedirectLogin = () => {
        window.location.href="/login";
    }
    const handleRedirectSignup = () => {
        window.location.href="/signup";
    }

    return (
      <Route
        {...rest}
        render={() =>
          auth.isAuthenticated() ? (
            children
          ) : (
            <div>
                <p className="text">User not authenticated. Please sign up or login for accessing this page</p>
                <button onClick={handleRedirectLogin}>Login</button>
                <button onClick={handleRedirectSignup}>SignUp</button>
            </div>
          )
        }
      />
    );
  }

  export default PrivateRoute;