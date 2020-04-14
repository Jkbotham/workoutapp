import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import './pages.css';
import Header from "../header/header";
import API from "../../utils/api"
import Card from "../cards/exerciseCard"

async function getWorkout(id) {
    let workout = await API.workout(id)
    console.log(workout.data)
};


function Workout() {


    
    useEffect(() => {
        getWorkout("5e3755b91012cc3f3413f1ff");
      },[]);


    const testWorkout = {
        workoutName: "Bench Press",
        sets: 4,
        reps: [12, 10, 10, 8]
    }
    return (
        <div>
            <Header />
            {/* <button type="button"
                    style={
                        {
                            width: "100px",
                            height: "50px",
                            fontSize: "24px",
                            backgroundColor: "white",
                            color: "darkslategray",
                            borderRadius: "6px",
                            border: ".5px solid white",
                            padding: 5
                        }
                }>
                    Add Users
                </button> */}
            <div className="workout">
                <div className="container container w3-container w3-center w3-animate-opacity" style={{ margin: "auto", width: "90%" }}>
                    <Row>
                        <Card workout={testWorkout} />
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Workout;