const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true}) ;

const fruitSchema = new mongoose.Schema ({
  name: {
  type: String,
  required: [true, "Pune nume"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const rodie = new Fruit({
  name:"Rodie",
  rating: 10,
  review: "Good one"
})


rodie.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age:12,
  
});

person.save();

async function run1 () {
  try {
   const res = await Person.updateOne({name:"John"}, {favouriteFruit: rodie});
  } catch (err) {
  console.log(err)
  }}
run1();


async function run () {
  try {
  let list = await Fruit.find ();
  mongoose.connection.close();
  list.forEach(item =>
    console.log(item.name)
  );
  } catch (err) {
  console.log(err)
  }}
//run();
