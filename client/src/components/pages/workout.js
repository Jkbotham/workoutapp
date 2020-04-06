import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import './pages.css';
import Header from "../header/header";
import Api from "../../utils/api"
import Card from "../cards/exerciseCard"




function Workout() {

    async function getWorkout(id) {
        let workout = Api.workout(id)
        console.log(workout)
    };
    
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