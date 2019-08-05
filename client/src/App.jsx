import React from "react"
import NavBar from "./NavBar";
import HomePage from "./HomePage";
//import {Router} from "@reach/router";

function App () {
  return (
  <div>
    <header className = "lm-navheader">
      <NavBar/>
    </header>

    <main className = "lm-main">
      
      <HomePage />
      
      
        

      
    </main>
   </div>
          
  )
}
          
export default App;
