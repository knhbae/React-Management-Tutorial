// import express from "express";
// import { json, urlencoded } from "body-parser";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "http://placeimg.com/64/64/1",
      name: "skehdqls",
      birthday: "961222",
      gender: "남자",
      job: "대학생"
    },
    {
      id: 2,
      image: "http://placeimg.com/64/64/2",
      name: "skehdqls",
      birthday: "961222",
      gender: "남자",
      job: "대학생"
    },
    {
      id: 3,
      image: "http://placeimg.com/64/64/3",
      name: "skehdqls",
      birthday: "961222",
      gender: "남자",
      job: "대학생"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
