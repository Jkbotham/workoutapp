import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import './pages.css';
import Header from "../header/header";
import API from "../../utils/api"
import Card from "../cards/exerciseCard"
import Select from "react-select";


function Workout() {

    const [exerciseData, setExerciseData] = useState();
    const [selectedExercise, setSelectedExercise] = useState();

    const style = {
        searchBar: {
            margin: 0,
            justifyContent: "center"
        }
    }

    function allCapsAfterSpace(string) {
        let splitString = string.toLowerCase().split(" ");
        for (let i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        }
        return splitString.join(" ");
    }

    async function getExercises() {
        let getExercises = await API.getExercises()
        getExercises.data.forEach(obj =>
            obj.label = allCapsAfterSpace(obj.name)
        )
        setExerciseData(getExercises.data);
    };

    useEffect(() => {
        console.log(selectedExercise, "   Line 42 -----------")
    }, [selectedExercise]);

    useEffect(() => {
        getExercises();
    }, []);

    {/* {(exerciseData && exerciseData[0]) ? (

                <ul className="list-group list-group-flush">
                    {console.log(exerciseData, "  Line 35")}
                    {exerciseData.map(map => (
                        <li className="list-group-item">{map.name}</li>
                    ))
                    }

                </ul>) : (<p>No Exercises </p>)
            } */}
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col fluid="md" style={style.searchBar}>
                        <Select style={style.select} options={exerciseData} onChange={e => setSelectedExercise(e)}></Select>
                    </Col>
                </Row>
            </Container>






            <div className="workout">
                <div className="container container w3-container w3-center w3-animate-opacity" style={{ margin: "auto", width: "90%" }}>
                </div>
            </div>
        </div>
    )
}

export default Workout;