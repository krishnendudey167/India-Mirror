import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// post array
let posts = []

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/edit", (req, res) => {
    res.render("edit.ejs", {
        allPosts: posts
    })
})

app.get("/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/newsubmit", (req, res) => {
    let title = req.body.title
    let content = req.body.content
    const post = { title: title, content: content }
    posts.push(post)
    console.log(posts)
    res.redirect("/")
})

app.get("/", (req, res) => {
    res.render("index.ejs", {
        allPosts: posts
    })
});

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})