import React from 'react'
import { Route, Switch } from "react-router-dom";
import AllHooks from './Components/AllHooks';
import BasicTodoOne from './Components/BasicTodoOne';
import CompoA from './Components/CustomHook/CompoA';
import CompoB from './Components/CustomHook/CompoB';
import Footer from './Components/Footer';
import BasicForm from './Components/Forms/BasicForm';
import UncontrolledForm from './Components/Forms/UncontrolledForm';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/React-Toastify/Login';
import ShortCircuitEval from './Components/ShortCircuitEval';
import SpreadOperator from './Components/SpreadOperator';
import CompA from './Components/UseContext/CompA';
import UseEffect1 from './Components/UseEffect/UseEffect1';
import UseEffect2 from './Components/UseEffect/UseEffect2';
import UseEffectApi from './Components/UseEffect/UseEffectApi';
import AboutUs from './Components/UseLocation/AboutUs';
import Homepage from './Components/UseLocation/Homepage';
import UseReducer from './Components/UseReducer/UseReducer';
import UseState from './Components/UseState';
import UseStateArray from './Components/UseStateArray';

const Components = () => {
  return (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>

    <Route path='/UseState'>
      <UseState />
    </Route>

    <Route path='/UseStateArray'>
      <UseStateArray />
    </Route>

    <Route path='/SpreadOperator'>
      <SpreadOperator />
    </Route>

    <Route path='/BasicTodoOne'>
      <BasicTodoOne />
    </Route>

    <Route path='/ShortCircuitEval'>
      <ShortCircuitEval />
    </Route>

    <Route path='/BasicForm'>
      <BasicForm />
    </Route>

    <Route path='/UseEffect1'>
      <UseEffect1 />
    </Route>

    <Route path='/UseEffect2'>
      <UseEffect2 />
    </Route>

    <Route path='/UseEffectApi'>
      <UseEffectApi />
    </Route>

    <Route path='/UncontrolledForm'>
      <UncontrolledForm />
    </Route>

    <Route path='/UseReducer'>
      <UseReducer />
    </Route>

    <Route path='/UseContext'>
      <CompA />
    </Route>

    <Route path='/CompoA'>
      <CompoA />
    </Route>

    <Route path='/CompoB'>
      <CompoB />
    </Route>

    <Route path='/Homepage'>
      <Homepage />
    </Route>

    <Route path='/AboutUs'>
      <AboutUs />
    </Route>

    <Route path='/Login'>
      <Login />
    </Route>

    <Route path='/AllHooks'>
      <AllHooks />
    </Route>

  </Switch>
  )
}

const App = () => {
  return (
    <>
    <Navbar />
    <Components />
    {/* <Footer /> */}
    </>
  )
}

export default App
