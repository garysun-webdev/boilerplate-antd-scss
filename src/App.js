import React, { Component } from "react";
import Button from "antd/lib/button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
