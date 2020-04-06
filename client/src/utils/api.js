import axios from "axios";

export default {
    workout: function (workoutID){
        return axios.get("/api/workout/" + workoutID)
    }
}