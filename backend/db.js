var mongoose = require('mongoose');
const mongoURI = 'mongodb://nazish22:Nazish%4086@ac-l3hxq6o-shard-00-00.jynnqan.mongodb.net:27017,ac-l3hxq6o-shard-00-01.jynnqan.mongodb.net:27017,ac-l3hxq6o-shard-00-02.jynnqan.mongodb.net:27017/FoodyPointMernssl=true&replicaSet=atlas-lf741f-shard-0&authSource=admin&retryWrites=true&w=majority'

console.log(mongoose.connection.readyState);

//const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://nazish22:Nazish%4086@cluster0.jynnqan.mongodb.net/?retryWrites=true&w=majority'
//const mongoURI = "mongodb://127.0.0.1:27017/foodApp"
//const mongoURI ='mongodb+srv://nazish22:Nazish%4086@cluster0.jynnqan.mongodb.net/FoodyPointMernretryWrites=true&w=majority'

/*const mongodb = async()=>{
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) =>{
    if (err) console.log("---" + err)
    else{
      console.log("connected to mongodb")
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(function(err, data){
        if(err) console.log(err);
        else{
          global.food_items = data;
          console.log(global.food_items)
        }
      })
    }
  });
}*/

const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
      
      const foodCollection = await mongoose.connection.db.collection("food_items");
      console.log("Connected to MongoDB");
    //  console.log(foodCollection)
      let data = await foodCollection.find({}).toArray()
      const foodCategory = await mongoose.connection.db.collection("food_category");
      
        let catData  = await foodCategory.find({}).toArray()
        //console.log(catData)
      global.food_items=data;
      global.food_category = catData;
      //console.log(data)
  
  } catch (err) { 
    console.error(err);
  }
};
module.exports = mongodb