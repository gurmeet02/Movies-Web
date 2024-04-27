const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  list: {
    type: Array,
  },
  userId: {
    type: Number,
    required: true,
  },
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
