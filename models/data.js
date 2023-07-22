import { sequelize, Owners, Cars, Owners_Cars } from "./model.js";

const createData = () => {

  syncAndInsert()

  async function syncAndInsert(){

    try{
      console.log('sync and create data')
      
      await sequelize.sync()

      const countOwners = await Owners.count()
      const countCars = await Cars.count()
      const countOnwersCars = await Owners_Cars.count()

      if (countOwners === 0) {
        await Owners.bulkCreate([

          {firstName: "Павел", lastName: "Андреев", age: 33, sex: "мужчина", birthday: "1990-09-19"},
          {firstName: "Артем", lastName: "Волков", age: 41, sex: "мужчина", birthday: "1982-04-16"},
          {firstName: "Виталий", lastName: "Мельников", age: 27, sex: "мужчина", birthday: "1996-03-10"},
          {firstName: "Егор", lastName: "Карасев", age: 24, sex: "мужчина", birthday: "1999-01-19"},
          {firstName: "Дарья", lastName: "Быкова", age: 25, sex: "женщина", birthday: "1998-12-11"},
          {firstName: "Евгений", lastName: "Золотов", age: 25, sex: "мужчина", birthday: "1998-6-22"}


        ])
        
        console.log("Values inserted! INTO Users table")
      } else {
        console.log("Server is running...")
      }

      if (countCars === 0) {
        await Cars.bulkCreate([

          {carName: "Kia Rio", color: "черный", maxSpeed: 199, price: 1434000},
          {carName: "Lada Granta", color: "белый", maxSpeed: 184, price: 692000},
          {carName: "Toyota Corolla", color: "оранжевый", maxSpeed: 195, price: 1955000},
          {carName: "Hyundai Solaris", color: "зеленый", maxSpeed: 193, price: 1408000},
          {carName: "Skoda Rapid", color: "серый", maxSpeed: 204, price: 1602000},
          {carName: "Porsche Panamera", color: "черный", maxSpeed: 315, price: 8210000}

        ])
      }

      if (countOnwersCars === 0) {
        await Owners_Cars.bulkCreate([

          {OwnerId: 1, CarId: 1},
          {OwnerId: 2, CarId: 2},
          {OwnerId: 2, CarId: 3},
          {OwnerId: 4, CarId: 3},
          {OwnerId: 5, CarId: 4},
          {OwnerId: 5, CarId: 5},
          {OwnerId: 5, CarId: 2},
          {OwnerId: 3, CarId: 6},
          {OwnerId: 6, CarId: 5},

        ])
      }
    } catch (err) {
      createData()
      console.log("Dadabase created faster then data... trying again..")
    }
  }
}

export {createData}