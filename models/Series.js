const mongoose = require('mongoose')

const seriesSchema = new mongoose.Schema({

    seriesName : {
        type : String,

        required : true

    },

    
  genre : {

    type : String,
    required: true,
  },

  ageRating : {
    
    type : String,
    required : true,
    
  },

  rating : {
    
    type : Number,
    
    min : 1,
    
    max : 5,

    required : true

  },

  review : {
    type: String,

    required : true
  },

  userCard : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"

  }

})

const Series = mongoose.model('Series', seriesSchema)

module.exports = Series