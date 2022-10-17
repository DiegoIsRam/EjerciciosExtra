import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts"

function App() {
  return (
      <React.Fragment>
         <NavBar />
      </React.Fragment>
  )
}

export default App
