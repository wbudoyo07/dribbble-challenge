import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FlexBox from "./pages/FlexBox";
import FlexBox1 from "./pages/FlexBox1";

const App =()=> (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component ={FlexBox}/>
        <Route exact path="/1" component = {FlexBox1}/>
      </Switch>
    </div>
  </Router>
)

export default App;
