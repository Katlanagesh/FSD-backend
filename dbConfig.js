const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  mongoose.connect(
    "mongodb+srv://Nagesh:nagesh123@cluster0.ythyz6o.mongodb.net/foodozer?retryWrites=true&w=majority"
  )
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));
  