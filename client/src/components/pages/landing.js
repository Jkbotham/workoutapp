import React, { useState, useEffect } from "react";
import { Row, Jumbotron, Button, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom"
import './pages.css';
import Header from "../header/header";
import API from "../../utils/api"
import Card from "../cards/exerciseCard"


const style = {
    button: {
        margin: 0,
        display: "flex",
        justifyContent: "center"
    },
    Jumbotron: {
        marginTop: "25px",
        backgroundColor: "WhiteSmoke"
    }

}

function landingPage() {

    return (
        <div>
            <Header />
            <div className="workout">
                <Container fluid="xl">
                    <Jumbotron style={style.Jumbotron}>
                        <Row>
                            <Col style={style.button}>
                                <Link to="/quickWorkout">
                                    <Button type="Button">Quick Start Workout</Button>
                                </Link>
                            </Col>
                            <Col style={style.button}>
                                <Link to="/workout">
                                    <Button>Start Workout From Plan</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </div>
        </div>
    )
}

export default landingPage;