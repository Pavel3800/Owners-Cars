import { Sequelize, DataTypes } from 'sequelize';
import mysql from 'mysql2'

// введите свой логин и пароль от MySQL
const user = "root"
const password = "password"

const con = mysql.createConnection({

  host: "localhost",
  user: user,
  password: password
});

const sequelize = new Sequelize('db_owners_cars', user, password, {
  host: "localhost",
  dialect: "mysql"
});

const createDB = (callback) => {

  con.query("CREATE DATABASE IF NOT EXISTS db_owners_cars", function(err, result){ 
    if (err) throw err
      console.log("Database created")
  });
  
  callback()
}

const Owners = sequelize.define("Owners", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY
  }
  },
  {
    timestamps: false
})

const Cars = sequelize.define("Cars", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  carName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maxSpeed: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  },
  {
    timestamps: false
})

const Owners_Cars = sequelize.define("Owners_Cars", {

  OwnerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Owners,
      key: 'id'
    }
  },
  CarId: {
    type: DataTypes.INTEGER,
    references: {
      model: Cars,
      key: 'id'
    }
  }
  },
  {
  timestamps: false
})

Owners.belongsToMany(Cars, {through: Owners_Cars})
Cars.belongsToMany(Owners, {through: Owners_Cars})

export {sequelize, Owners, Cars, Owners_Cars, createDB}