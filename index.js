import express from "express"
import path from "path"
import router from "./routes/routes.js"
import { createDB } from "./models/model.js"
import { createData } from "./models/data.js"


const __dirname = path.resolve()
const app = express()
const PORT = 3000


app.set('view engine', 'ejs')


app.use(express.json())
app.use('/', router)
app.use(express.static(__dirname + '/views'));


function startApp() {
    
        createDB(createData)
      
        app.listen(PORT, () => {
        console.log(`Server has been started on port: ${PORT}`)
    })
}

startApp()
