import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import { store } from "../src/store"

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Users from './components/Users/Users';
import UserPosts from './components/UserPosts/UserPosts';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <NavBar />}>
          <Route index path="/home" element={<Users />} />
          <Route path="/filter/posts" element={<UserPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
