

module.exports = (app) => {
    app.get("/exercise", (req, res) => {
        console.log(req)
        res.redirect("/exercise.html")
    })
}