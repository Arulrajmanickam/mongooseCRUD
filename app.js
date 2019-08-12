const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

//CREATING

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const peopleSchema = new mongoose.Schema({
    name: {type: String,
    required: [true, "Name is mandatory"]},
    Age: Number
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 4,
    review: "Keeps the doctor away"
})

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Soury"
})

const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Gives instant energy"
})
//apple.save();

//Fruit.insertMany([apple, orange, banana], ()=>{})

const person = mongoose.model("person", peopleSchema);

const myPerson = new person({
    name: "Arulraj",
    Age: 33
});

const anotherPerson = new person({
    name: "Kalaivani",
    Age: 30
});

//  anotherPerson.save();


//myPerson.save();

//Reading
Fruit.find((err, fruits) => {
    fruits.forEach(fruit => {
        console.log(fruit.name);
        mongoose.connection.close();
    }
    );
});

//UPDATING

person.updateOne({_id: "5d4ec48c724585285c09f38a" }, {name: "Caitlyn"}, (err)=>{});

//DELETING
person.deleteOne({name: "Caitlyn"}, (err)=>{});



