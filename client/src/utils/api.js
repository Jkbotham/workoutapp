import axios from "axios";

export default {
    workout: function (id){
        return axios.get("/api/workout/" + id)
    },
    getExercises: function () {
        return axios.get("/api/exercise")
    }
}