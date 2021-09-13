const mongoose =require('mongoose')
const Schema = mongoose.Schema

const peopleSchema = new Schema({
   
    name:String  ,
    age: Number,
    //image:String,
    foodsfavorite:[String],
    updatedAt: {type: Date, default: Date.now},
    createdAt: {type:Date, default: Date.now}
})

peopleSchema.pre('save', (next) => {
    this.updatedAt = Date.now()

    if(!this.createdAt) {
        this.createdAt = Date.now()
    }

    next()
})
module.exports = mongoose.model('people', peopleSchema,'peoplelist')