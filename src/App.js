import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function App() {

   const [{basket}, dispatch] = useStateValue();

  
   //Piece of code which runs based on a given condition

     useEffect(()=>{

     const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // user is logged in...
       
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      }else{
        // user is logged out..

          dispatch({
            type: "SET_USER",
            user: null
          })

      }
     });

     return () =>{
      // Any cleanup operation go in here...
      unsubscribe();
     }

     }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/checkout">
        <Header />
          <Checkout/>
        </Route>
        <Route path="/login">
        <Header />
        <Login/>
        </Route>
        {/* This is the default route */}
          <Route path="/" >
            <Header />
            <Home />
          </Route>




        </Switch>
      </div>
    </Router>

  );
}

export default App;
