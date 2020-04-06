
// eslint-disable-next-line no-unused-vars
const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err);
    }
    
    const json = await res.json();
    console.log(json);
    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch("/api/workouts/range");
    const json = await res.json();

    return json;
  },
  // async test () {

  //   const data = {
  //     exerciseId: "5e3755b91012cc3f3413f200",
  //     userId: "5e375a75eb6afc4544f8b1ad",
  //     reps: 2,
  //     weight: 10
  //   };
  //   const res = await fetch("/set/add", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: { "Content-Type": "application/json" }
  //   });

  //   const json = await res.json();
  //   return json;
  // }
};
