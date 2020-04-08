import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import About from "../components/About";
import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Switch, Route, } from "react-router-dom";
import Projects from "../components/Projects";
import { SET_WEATHER } from '../state/actions/actionTypes'


const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const currentSession =
      {
        location: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        },
      }

      let token = "0c1b30324a585f4c8276c8a2e1189a84";
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&APPID=${token}`
      );     
      dispatch({
        type: SET_WEATHER,
        payload: {
          city: response.data.name,
          weather: response.data.weather[0].description,
          temp: response.data.main.temp,
          weatherIcon : response.data.weather[0].icon

        },
      });
    });
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App
