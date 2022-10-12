import mongoose from 'mongoose';
// import bcrypt from "bcrypt"

const categorySchema = new mongoose.Schema({
    
        name: {
          type: String,
          required: true,
          unique: true,
          
        },
        pimage:{
         type:String,
        },
        slug: {
          type: String,
          required: true,
          unique: true,
        },
        parentId: {
          type: String,
        },  
      },
      { timestamps: true }
    );

 
const Categoryschema = mongoose.model('Categoryschema', categorySchema);

export default Categoryschema;