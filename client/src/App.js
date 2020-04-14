import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from "../src/components/pages/landing";
import Footer from "../src/components/footer/footer";
import Workout from "../src/components/pages/workout";
import quickWorkout from "../src/components/pages/quickWorkout"

function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/workout" component={Workout} />
        <Route exact path="/quickWorkout" component={quickWorkout} />
        {/* <Route exact path="/history" component={History} />
        <Route exact path="/users" component={ViewAll} />
        <Route exact path="/signup" component={Signup} /> */} */}
        </div>
      <Footer />
    </Router>
  );
}

export default App;
