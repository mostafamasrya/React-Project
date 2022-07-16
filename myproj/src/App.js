import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import HeaderComponent from "./HeaderComponent"
import SecondDiv from './SecondDiv';
import ThirdDiv from './ThirdDiv';
import ForthDiv from './ForthDiv';
import Footer from './Footer';
import Form1 from './Form1';
import Form2 from './Form2';
import Navbar from './Navbar';
import Notfound from './Notfound';
import reportWebVitals from './reportWebVitals';
import Movielist from './Movielist';
import MYcard from './Mycard';
import MovieDetails from './MovieDetails';
import Movielist2 from './movielist2';

import Favorites from './Favorites';
import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';
import store from './store/Store';
import {Provider} from "react-redux"
// import App from './App';
import ListUsers from './ListUsers';

import { LangContext } from './context/LangContext';












import logo from './logo.svg';
import './App.css';




function App() {

  const [contextLang , setContextLang] =useState("en")
  return (
       <div dir={contextLang === "ar" ? "rtl" : "ltr"} className={contextLang === "ar" ? "text-right" : "text-left"}>
    <Provider store={store} >
    <LangContext.Provider value={{contextLang,setContextLang}} >
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path={"/form1"}  component={Form1} />
      <Route exact path={"/form2"}  component={Form2} />
      <Route exact path={"/movielist"}  component={Movielist} />
      <Route exact path={"/movielist2"} component={Movielist2} />
      <Route exact path={"/favorites"} component={Favorites} />
      <Route exact path={"/users"} component={ListUsers} />

  
      <Route exact path={"/card"} component={MYcard} />
      <Route exact path={"/moviedetails/:id"} component={MovieDetails} />




      <Route exact path={"*"}  component={Notfound} />
      




    </Switch>
    
    
    </BrowserRouter>
    </LangContext.Provider>
    </Provider>

    </div>

  );
}

export default App;
