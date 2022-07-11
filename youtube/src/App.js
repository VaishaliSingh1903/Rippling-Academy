import React from "react";
import "./App.css";
import SearchList from "./components/SearchList";
import Trending from "./components/Trending";
import Nav from "./components/Nav";
import VideoPlayer from "./components/VideoPlayer";
import SideBar from "./components/SideBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact>
              <div className="app__mainpage">
                <SideBar/>
                <Trending />
              </div>
          </Route>
          <Route path='/video/:id'>
              <div className="app__mainpage">
                <VideoPlayer />
              </div>
          </Route>
          <Route path='/search/:query'>
              <div className="app__mainpage">
                <SearchList />
              </div>
          </Route>
          
        </Switch>  
      </div>
    </Router>
    
  );
}


export default App;

