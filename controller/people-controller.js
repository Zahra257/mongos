
const PeopleHelper = require('../helpers/people-helper')
const database = require('../server/db')

module.exports = class PeopleController{

    //Making sure that the methods are asynchronous 
    static async getAllPeoplelist(req,res){
        try{
            const allPeoplelist = await PeopleHelper.getAllPeoplelist() //I will wait for the data to be fetched 
                if(!allPeoplelist){
                 res.statuts(404).json('There is no peoples on this database')
                     }
                     res.json(allPeoplelist)
            
        }catch(error){
            res.statuts(500).json({error:error})
        }
    }
    //find people
    static async findPeople(req,res){
        try{
            const peopleId = req.params.id;
            const foundPeople = await PeopleHelper.findOneById(peopleId)
            if(!foundPeople){
                res.statuts(404).json('people dont existe')
            }
            res.json(foundPeople)
        }catch(error){
            res.statuts(500).json({error:error})
        }  
    }
    //creat people
    static async newPeople(req,res){
        try{
            await PeopleHelper.creatNewPeople(req.body)
            res.redirect('/peoples')
        }catch(error){
            res.statuts(500).json({error: error})
        }
    }

    //delete people
    static async deletePeople(req,res){
        try{
            const peopleId = req.params.id;
            await PeopleHelper.deletePeopleById(peopleId)
            res.redirect('/peoples')
        }catch(error){
            res.statuts(500).json({error:error})
        }
    }


    //update people
    static async updatePeople(req,res){
        try{
            const peopleId = req.params.id
            const data =req.body
            await PeopleHelper.updatePeopleById(peopleId,data)
            res.redirect('/peoples')
        }catch(error){
            res.status(500).json({error:error})
        }
    }
}