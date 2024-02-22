const mongoose=require('mongoose');

const booksSchema= mongoose.Schema(
    {
        name:{
            type:String,
            require:[true, "enter name"]
        },
        creator:{
            type:String,
            require:true
        },
        about:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        image:{
            type:String,
            require:false
        }
        
    },
    {
    timestamps:true
    }
)

const Book=mongoose.model("Book", booksSchema);
module.exports=Book;