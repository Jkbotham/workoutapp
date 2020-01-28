

module.exports = (app) => {

app.get("/exercise", (req, res) => {
    console.log("yes")
    res.redirect("/exercise.html");
})
}