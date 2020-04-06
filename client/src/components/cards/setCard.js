import React from "react";
import { Card } from "react-bootstrap";
import "./card.css"

function setCard (props) {
    return (
        <Card className="setCard">
            <Card.Header>{props.workout.workout.workoutName} : {props.reps} Rep Goal</Card.Header>
            Well Shit
        </Card>
    )
}

export default setCard;
