const mongoose=require('mongoose')
const people = require('../models/people')
const database = require('../server/db')

module.exports = class PeopleHelper{
   
    //get all people 
    static async getAllPeoplelist(){
        try{
            const allPeoplelist = await people.find() //I will wait for the data to be fetched 
            return allPeoplelist
            
        }catch(error){
            console.log(error)
        }
    }
    //findOne By iD
    static async findOneById(peopleId){
        try {
            const singlePeople = await people.findById({_id: peopleId})
            return singlePeople
        }catch(error){
            console.log(error)
        }
    }
    //create new people
    static async creatNewPeople(data){
        try{
            const newPeople = {
                //_id:mongoose.Schema.Types.ObjectId,
                name:data.name,
                age: data.age,
                //image:data.image,
                foodsfavorite:[data.foodsfavorite]
            }
            const creatingPeople = await new people(newPeople).save()
            return creatingPeople
        }catch(error){
            console.log(error)
        }
    }

    //delete people
    static async deletePeopleById(peopleId){
        try {
            
            const newListPeople = await people.findOneAndDelete({_id: peopleId})
            return newListPeople
        }catch(error){
            console.log(error)
        }
    }
    static async updatePeopleById(peopleId,data){
        try{
            const updatedPeople = await people.findByIdAndUpdate({_id: peopleId},
                {name:data.name,
                age: data.age,
                foodsfavorite:[data.foodsfavorite]})
                return updatedPeople
        }catch(error){
            console.log(error)
        }
    }

}