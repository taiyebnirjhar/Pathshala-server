const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

/**********************************************************/
const course = require("./data/course.json");
const category = require("./data/category.json");
/**********************************************************/

app.get("/", (req, res) => {
  res.send(course);
});
app.get("/category", (req, res) => {
  res.send(category);
});

app.get("/course", (req, res) => {
  console.log(req.params.id);
  res.send(course);
});
app.get("/course/:id", (req, res) => {
  /**********************************************/
  const id = req.params.id;
  const data = [];
  console.log(id);
  /**********************************************/

  /**********/
  let selectedcourse = course.find((item) => item.id === id);
  /**********/

  /**********/
  if (!selectedcourse) {
    course.map((items) => {
      const courseData = items.data;
      courseData.map((item) => {
        data.push(item);
      });
    });

    selectedcourse = data.find((item) => item.id == id);
  }
  /**********/

  console.log(selectedcourse);

  res.send(selectedcourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
