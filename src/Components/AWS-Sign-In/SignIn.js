import { React, useEffect, useState } from "react";
import axios from "axios";
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { AmplifySignOut, withAuthenticator, AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import InternalHome from '../InternalSite/InternalHome/InternalHome'
import './style.css'
import Bootstrap from "./theme";
import { Auth } from 'aws-amplify';
Amplify.configure(awsconfig);
 function SignIn() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    // Auth.currentAuthenticatedUser({
    //   bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    // }).then(user => console.log(user))
    //   .catch(err => console.log(err));
    
    // axios.get("https://cervello-global.herokuapp.com/users").then((res) => {
    //   const userData = [];

    //   userData.push(res.data);
    //   setUser(userData);
    // });
  }, []);

    //  return await Auth.currentAuthenticatedUser()
  //    .then(() => { return true; })
  //    .catch(() => { return false; });



  var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

  const signInButton =  async (e) => {
    e.preventDefault();

    let username = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;
    console.log(username, password)

    try {
      const user = await Auth.signIn(username, password);
      console.log(user)
      window.location.href = "/Internal";
    } catch (error) {
      console.log('error signing in', error);
    }
   
    // var authenticationData = {
    //   Username: email,
    //   Password: password,
    // };

    // var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    //   authenticationData
    // );

    // var poolData = {
    //   UserPoolId: "us-east-1_HFHl36YHN",
    //   ClientId: "3l0umk6oj4tp40lm6rb5hlfma3",
    // };

    // var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    // var userData = {
    //   Username: email,
    //   Pool: userPool,
    // };

    // var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    // cognitoUser.authenticateUser(authenticationDetails, {
    //   onSuccess: function (result) {
    //     User[0].map((x) => {
    //       if (x.email === result.idToken.payload.email) {
    //         window.location.replace(`${x.status}`);
    //       }
    //     });
    //   },

    //   onFailure: function (err) {
    //     alert("Email or password do not match");
    //     console.log(err)
    //   },
    // });
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={signInButton}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="username"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              name="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6 text-black	 ">
            <button
              className={`text-black bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn