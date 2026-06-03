const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio project"
  }
  {
    title: "Task Manager",
    description: "Task management application"
  }
];

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio project"
  },
  {
    title: "Task Manager",
    description: "Task management application"
  }
];

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});