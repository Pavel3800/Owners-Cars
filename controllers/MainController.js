import { Owners, Cars, Owners_Cars } from "../models/model.js"

class MainController {
    async mainPage (req, res) {
        try {
            const owners = await Owners.findAll()
            const cars = await Cars.findAll()
            const owners_cars = await Owners_Cars.findAll()
            
            res.render('main', {title: 'Main page', owners, cars, owners_cars, active: 'home'})
                        
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async query1 (req, res) {
        try{
            const querys = await Owners.findAll({
                
                attributes: ['id', 'firstName', 'lastName'],
                include: [{
                    model: Cars,
                    attributes: ['carName', 'price']
                }]
            })
            
            res.render('query1', {title: 'Query 1', querys, active: 'query1'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async query2 (req, res) {
        try{
            const cars = await Cars.findAll({
                attributes: ['id', 'carName', 'maxSpeed'],
                include:[{
                    model: Owners,
                    attributes: ['firstName', 'age']
                }]
            })
            // res.json(querys)
            res.render('query2', {title: 'Query 2', cars, active: 'query2'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
}

export default new MainController