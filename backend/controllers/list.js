const List = require("../models/list");

exports.getList = (req, res, next) => {
  List.find()
    .lean()
    .then((data) => {
      res.json({ aboutUser: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postList = (req, res, next) => {
  const list = new List({
    list: [
      {
        title: "Batman",
      },
      {
        title: "Batman 2",
      },
    ],
    userId: 1,
  });
  list
    .save()
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ result: err });
    });
};
