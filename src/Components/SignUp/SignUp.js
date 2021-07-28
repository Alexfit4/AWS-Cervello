import {React, useEffect, useState} from "react";
import "./Login.css";
import axios from 'axios'
const Login = () => {

  const [values, setValues] = useState()

  const handle = (e) =>{
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]:value
    })
  }

      var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
     

  useEffect(() => {
    
    axios.get('https://cervello-global.herokuapp.com/users').then((res) =>{
      console.log(res.data);
    })
  }, [])
  const handleFormSubmit = (e) => {
    e.preventDefault();

       axios.post("https://cervello-global.herokuapp.com/users",{
         firstName: values.firstName,
         lastName: values.lastName,
         status: values.status,
         email: values.email
       }).then((res) => {
         console.log(res);
       }).catch((err) =>{
         console.log(err);
       });

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;
    let firstName = e.target.elements.firstName?.value;
    let lastName = e.target.elements.lastName?.value;
    let status = e.target.elements.status?.value;

   

 

    var poolData = {
      UserPoolId: "us-east-1_HFHl36YHN", 
      ClientId: "3l0umk6oj4tp40lm6rb5hlfma3", 
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];

    var dataEmail = {
      Name: "email",
      Value: email,
    };

    var userName = {
      Name: "name",
      Value: firstName,
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataEmail
    );
    var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
      userName
    );

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);

 		userPool.signUp(
      email,
      password,
      attributeList,
      null,
      function (err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        var cognitoUser = result.user;
        console.log("user name is " + cognitoUser.getUsername());
      
      }
    );
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="firstName"
              name="firstName"
              onChange={handle}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="firstName"
              placeholder="Your First Name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="lastName"
              name="lastName"
              onChange={handle}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="lastName"
              placeholder="Your Last Name"
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input
              type="status"
              name="status"
              onChange={handle}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="status"
              placeholder="Your Status"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handle}
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
};

export default Login;
