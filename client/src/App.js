import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from "../src/components/pages/workout"
import Footer from "../src/components/footer/footer"

function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/admin" component={Admin} /> */}
        {/* <Route exact path="/main" component={Main} />
        <Route exact path="/history" component={History} />
        <Route exact path="/users" component={ViewAll} />
        <Route exact path="/signup" component={Signup} /> */}
        </div>
      <Footer />
    </Router>
  );
}

export default App;
