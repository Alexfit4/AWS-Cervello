import React from 'react'
import Amplify from 'aws-amplify';
import awsconfig from '../../../aws-exports';
import { AmplifySignOut, AmplifySignIn, withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import './style.css'
Amplify.configure(awsconfig);

 function Managers() {
    const signInButton = async (e) => {
        e.preventDefault();

        let username = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        console.log(username, password)

        try {
            const user = await Auth.signIn(username, password);
            console.log(user)
            window.location.href = "/Managers-Portal";
        } catch (error) {
            console.log('error signing in', error);
        }
    };

     const signUp = async (e) => {
         let username = e.target.elements.email?.value;
         let password = e.target.elements.password?.value;
         try {
             const { user } = await Auth.signUp({
                 username,
                 password,
             });
             console.log(user);
         } catch (error) {
             console.log('error signing up:', error);
         }
     }
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
    )
}

export default withAuthenticator(Managers)