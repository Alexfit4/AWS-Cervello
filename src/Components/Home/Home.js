import {React, useState, useEffect} from "react";
import Cervello from "./Assets/Cervello-Technologies_-LLC2.png";
import "./style.css";
import CervelloCenter from "./Assets/cervelloGlobalAsiapacificlogo.png";
import { Auth } from 'aws-amplify';


export default function Home() {
    const [logged, setLogged] = useState("Log In")
    const [loggedOut, setLoggedOut] = useState()

  const signOut = async () => {
    try {
      await Auth.signOut()
      window.location.href = "/Login";
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async function ionViewCanEnter() {
    let userSigned;
    try {
      await Auth.currentAuthenticatedUser();
      console.log('true')
       userSigned = true;
    } catch {
      console.log('false')
       userSigned = false
    }

    if (userSigned === false && window.location.href.includes("/Internal") || userSigned === false && window.location.href.includes("/Manager")){
     return window.location.href = "/Login"
    }
  }

 

  useEffect(() => {
    if (window.location.href.includes("/Internal") || window.location.href.includes("/Manager")) {
      setLogged("Log Out")
    }

    ionViewCanEnter()

  }, [])



  const handleClick = () => (window.location.href = "/Login");
  return (
  
      <div className="grid grid-cols-3 gap-4">
        <div>
          {" "}
          <img className="globalLogo" src={Cervello} alt="Cervello" />
        </div>
        <div>
          {" "}
          <img src={CervelloCenter} alt="centerLogo" />
        </div>
        <div className="topright">
          <button
            onClick={async () =>{
            if (window.location.href.includes("/Internal") || window.location.href.includes("/Manager")) {
              try {
                await Auth.signOut()
                window.location.href = "/Login";
              } catch (error) {
                console.log('error signing out: ', error);
              }

            } else{
              (window.location.href = "/Login")
            }
            }}
            className=" button  bg-blue-500 hover:bg-blue-700 text-white font-bold py-.5 px-2 rounded"
          >
            {logged}
          </button>
        </div>
        
      </div>
   
  );
}
