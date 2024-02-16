const mongoose=require('mongoose')

const Schema= mongoose.Schema

const dataSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true   
    }
})

const Data= mongoose.model("Data",dataSchema)

module.exports = Data