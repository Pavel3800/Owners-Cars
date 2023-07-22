import {Cars, Owners_Cars } from "../models/model.js"

class CarsController{

    async getAll (req, res) {
        try {
            const user = await Cars.findAll()
           return res.json(user)            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne (req, res) {
        try{
            const user = await Cars.findAll(
                {where: {
                    id: req.params.id
            }})
            return res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async create (req, res) {
        try{
            const {carName, color, miliage, price, licensePlate} = req.body
            const user = await Owners.create({carName, color, miliage, price, licensePlate})
            res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAllOC (req, res) {
        try {
            const user = await Owners_Cars.findAll()
            return res.json(user)            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async createOC (req, res) {
        try{
            const {OwnerId, CarId} = req.body
            const user = await Owners_Cars.create({OwnerId, CarId})
            res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new CarsController()