let mongoose = require('mongoose')
let Schema = mongoose.Schema


//define the schema

let house = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  levels: { type: Number, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },

  // this._id = data._id
  //   this.bedrooms = data.bedrooms
  //   this.bathrooms = data.bathrooms
  //   this.imgUrl = data.imgUrl || "https://placehold.it/200x200"
  //   this.levels = data.levels || 1
  //   this.year = data.year
  //   this.price = data.price
  //   this.description = data.description || "N/A"

})


//export schema
module.exports = mongoose.model('house', house)