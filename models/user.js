const mongoose = require("mongoose");

// userschema
const userSchema = new mongoose.Schema({
  voornaam: {
    type: String,
    required: true,
    trim: true,        
    // haalt spaties voor en achter de string weg
  },
  achternaam: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true, 
  },

  telefoonnummer: {
      type: Number,
      // required: true, 
      trim: true, 
  },

  plaats:   {
      type: String,
      // required: true,
      trim: true, 

  },

  afstand: {
      type: String,
      // required: true,
      trim: true, 
  }, 

  opleidings_niveau: {
    type: String,
    required: true,
    trim: true, 
      
  },

  schooljaar: {
    type: String,
    // required: true,
    trim: true, 
  }, 

  opleiding: {
    type: String,
    // required: false,
    trim: true, 
  }, 

   bijles: {
    type: String,
    required: true, 
    trim: true, 
   }, 

   algemene_voorwaarden: {
    type: String,
    required: true,
    trim: true, 
   }

});

module.exports = mongoose.model("user", userSchema);