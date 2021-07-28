import { React, useEffect, useState } from "react";
import axios from "axios";
import liveView from "./Assets/cervellointernalhome2.png";
import ApiKey from '../../../Auth/Routes'
import { Auth } from 'aws-amplify';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listCurrents, listFutures } from '../../../graphql/queries'
export default function InternalHome() {

  const [current, setCurrent] = useState([]);
  const [future, setFuture] = useState([]);
  const [Weather, setWeather] = useState([]);

  


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getDegree = (k) => {
    return Math.round(((k - 273.15) * 9) / 5 + 32);
  };

  const fetchCurrent = async () => {
    try {
      const currentData = await API.graphql(graphqlOperation(listCurrents));
      const currentList = currentData.data.listCurrents.items;    
      setCurrent(currentList);
      
    } catch (error) {
      console.log('error on fetching songs', error);
    }
  };

  const fetchFuture = async () => {
    try {
      const FutureData = await API.graphql(graphqlOperation(listFutures));
      const FutureList = FutureData.data.listFutures.items;
      
      setFuture(FutureList);

    } catch (error) {
      console.log('error on fetching songs', error);
    }
  };

  useEffect(() => {
    fetchCurrent()
    fetchFuture()
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Australia&appid=${ApiKey}`
      )
      .then((res) => {
        console.log(res.data);
        const weatherData = [];
        weatherData.push(res.data);
        setWeather(weatherData);
      });
  }, []);







  const signOut = async() =>{
    try {
      await Auth.signOut()
      window.location.href = "/Login";
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }




  return (
    <div>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 ">        
        <div className=" rounded-sm border-black border-opacity-100 border-solid border-4">
          <p className=" text-center"> Announcements</p>
          <p className="text-center">Company Information</p>
        </div>

        <div className="rounded-sm border-black border-opacity-100 border-solid border-4">
          <p className="text-center">Route Advisories</p>
          <p className="text-center">Weather Routes</p>
          {Weather.map((x) => {
            return (
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`}
                  alt=""
                />
                <h2 className="text-left">
                  {capitalizeFirstLetter(x.weather[0].description)}
                </h2>
                <h2 className="text-left">
                  Temp: {getDegree(x.main.temp)} <span>&#176;</span>{" "}
                </h2>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-center font-black text-3xl text-white">
            Current Operations
          </h1>
          <form>
            <table class="table-auto border-separate border border-black border-opacity-100 border-solid">
              <thead>
                <tr>
                  <th class="border border-black border-opacity-100 border-solid">
                    Driver
                  </th>
                  <th class="border border-black border-opacity-100 border-solid">
                    Vehicle Number
                  </th>
                  <th class="border border-black border-opacity-100 border-solid">
                    HAZMAT (Y or N)
                  </th>
                  <th class="border border-black border-opacity-100 border-solid">
                    Load Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {current.length > 0
                  ? current.map((x) => {
                      return (
                        <tr key={x._id}>
                          <td className="border border-black border-opacity-100 border-solid">
                            {x.driver}
                          </td>
                          <td className="border border-black border-opacity-100 border-solid">
                            {x.vehicle_number}
                          </td>
                          <td className="border border-black border-opacity-100 border-solid">
                            {x.hazmat}
                          </td>
                          <td className="border border-black border-opacity-100 border-solid">
                            {x.load_description}
                          </td>

              
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </form>

          <form>
            <h1 className="text-center font-black text-3xl text-white">
              Future Operations
            </h1>
            <table class="table-auto border-separate border border-black border-opacity-100 border-solid">
              <thead>
                <tr>
                  <th class="border border-black border-opacity-100 border-solid">
                    Date Scheduled
                  </th>
                  <th class="border border-black border-opacity-100 border-solid">
                    Date Due
                  </th>
                  <th class="border border-black border-opacity-100 border-solid">
                    Load Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {future.length > 0
                  ? future.map((x) => {
                      return (
                        <tr key={x._id}>
                          <td className="border border-black border-opacity-100 border-solid">
                            {x.date_scheduled}
                          </td>
                          <td className="border border-black border-opacity-100 border-solid">
                            {x.date_due}
                          </td>
                          <td className="border border-black border-opacity-100 border-solid">
                            {x.load_description}
                          </td>

               
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </form>
        </div>

        <div className="col-end-4 col-span-2">
          <img src={liveView} alt="" />
        </div>
      </div>
    </div>
  );
}
