import React from "react";
import { Card, Col, Row, CardGroup } from "react-bootstrap";
import SetCard from "../cards/setCard"
import "./card.css"


function workoutCard(props) {
    const reps = props.workout.reps
    return (
            <Card className="exerciseCard">
                <Card.Header>{props.workout.workoutName} [{reps.toString()}]</Card.Header>
                <Card.Body>
                    {/* <CardGroup> */}
                    <Row>
                    {reps.map(obj => { return <Col><SetCard workout={props} reps={obj}/></Col>})}                        
                    </Row>

                    {/* </CardGroup> */}

                </Card.Body>
            </Card>
    )
}

export default workoutCard;