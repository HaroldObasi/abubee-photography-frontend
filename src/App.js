import React, { useState} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/Home";
import Menu from "./components/Menu";
import MobileMenu from "./components/MobileMenu";
import Hire from './screens/Hire';
import About from './screens/About'
import CreatePhoto from './screens/CreatePhoto';
import Admin from './screens/Admin';
import Signin from './screens/Signin';

function App() {

  const [windowwidth, setWindowWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  });

  const prefMenu = () => {
    if (windowwidth > 972){
      return <Menu />
    }else{
      return <MobileMenu />
    }
  }
  return (
    <>
    <BrowserRouter>
      {prefMenu()}
      <Route path = "/" exact component = {Home} />
      <Route path = "/hire" component = {Hire} />
      <Route path = "/about" component = {About} />
      <Route path = "/admin" exact component = {Admin} />
      <Route path = "/admin/createphoto" component = {CreatePhoto} />
      <Route path = "/admin/signin" component = {Signin} />
    </BrowserRouter>
    </>
  );
}

export default App;
