const express = require("express");
const router = express.Router();
const Model = require("../Models/VideoModel");

router.post("/add", (req, res) => {
  console.log(req.body);
  //Storing data to MongoDb
  new Model(req.body)
    .save() //to add the data in database
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.post("/delete", (req, res) => {
  res.send("Data deleted");
});
router.post("/update", (req, res) => {
  res.send("updated data");
});

router.get("/getall", (req, res) => {
  Model.find({}) //empty brackets will give all the data from the database
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id) //param is for parameter
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbycategory/:category", (req, res) => {
  console.log(req.params.category);
  Model.find({ pcategory: req.params.category })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new:true is for data update
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
