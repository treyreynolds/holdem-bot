var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  name: String,
  stack: Number,
  currentlyFolded: Boolean,
  cards: Array,
  bettingStyle: String,
  position: Number,
  name: String
});