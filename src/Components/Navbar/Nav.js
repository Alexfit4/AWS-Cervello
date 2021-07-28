import React, { useContext, createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Nav.css";
import Main from "../Main/Main";
import { Auth } from 'aws-amplify';
import { HomeContent, InternalContent, ManagerContent } from "./NavContent";
import NavRoutes from "./Routes";
import InternalHome from "../InternalSite/InternalHome/InternalHome";


function Navbars() {


  let navContent = [];

  if (window.location.href.includes("/Internal")) {
    navContent.push(InternalContent);
  } else if (window.location.href.includes("/Manager")) {
    navContent.push(ManagerContent)
  } else {
    navContent.push(HomeContent);
  }



  return (
    <ProvideAuth>
      <div className="main">
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto tracking-widest text-lg">
                    {navContent[0].map((x) => {

                      return <Nav.Link className="links" href={x.href}>
                        {x.text}
                      </Nav.Link>

                    })}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
             
              <Switch>
                <Route exact path="/" component={Main} />
                <PrivateRoute path="/Internal" >
                  <InternalHome />
                </PrivateRoute>

                {NavRoutes.map((x) => {
                  return <Route path={x.path} component={x.component} />;
                })}
              </Switch>
            </Router>
          </div>
        </div>
        <div className="bottomNav row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto tracking-widest">
                    <Nav.Link className="links" href="/capabilities">
                      Logistics{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/capabilities">
                      Program Management{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/capabilities">
                      Engineering{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/capabilities">
                      CyberSpace Operation{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/capabilities">
                      Knowledge & Information Management{" "}
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Switch></Switch>
            </Router>
          </div>
        </div>
        <footer>
          <div className="fabIcons tracking-widest  space-x-4">
            <a href="https://www.facebook.com/CervelloT/">
              <i className="fab fa-facebook-square text-3xl "></i>
            </a>
            <a href="https://twitter.com/cervello_cyber?lang=en">
              <i className="fab fa-twitter-square text-3xl "></i>
            </a>

            <a href="https://www.linkedin.com/company/cervellotech">
              <i className="fab fa-linkedin text-3xl "></i>
            </a>
          </div>
          &copy;2021 Cervello Technologies. All Rights Reserved. No access, use
          or modification without Cervello's express consent in writing.
        </footer>
      </div>
    </ProvideAuth>
  );

}





const fakeAuth = {

  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState("user");

  const ionViewCanEnter = async () => {
    return await Auth.currentAuthenticatedUser()
      .then(() => setUser("user"))
      .catch((err) => console.log(err));
  }

  ionViewCanEnter()




  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Navbars;
