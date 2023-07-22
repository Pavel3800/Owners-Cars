import {Owners} from "../models/model.js"

class OwnersController{
    
    async getAll (req, res) {
        try {
            const users = await Owners.findAll()
            res.json(users)
                        
        } catch (error) {
            res.status(500).json(error)
        }
    }        
    async getOne (req, res) {
        try{
            const user = await Owners.findAll({
                where: {
                    id: req.params.id
            }})
            return res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async create (req, res) {
        try{
            const {firstName, lastName, age, sex, birthday} = req.body
            const user = await Owners.create({firstName, lastName, age, sex, birthday})
            res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
}

export default new OwnersController()