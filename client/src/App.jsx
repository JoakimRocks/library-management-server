import React from "react"
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import {Router} from "@reach/router";
import StudentDetails from "./StudentDetails";

function App () {
  return (
  <div>
    <header className = "lm-navheader">
      <NavBar/>
    </header>

    <main className = "lm-main">
      <Router>
        <HomePage path="/"/>
        <StudentDetails path="/StudentDetails"/>
      </Router>
    </main>
   </div>
          
  )
}
          
export default App;
