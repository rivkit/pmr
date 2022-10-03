//const db=require('./DB/db')
// const { path } = require('express/lib/application')
const express = require('express')
const app = express()
var cors = require('cors')
const logger = require('./LOG/configuration')
const db = require('./DB/db')
const myPath = require('path');
const Group = require('./ROUTER/group')
const Babies = require('./ROUTER/Babies')
const Meal = require('./ROUTER/meal')
const Dose = require('./ROUTER/dose')
const dotnev = require('dotenv')
dotnev.config();

const port = process.env.PORT
db._conect()

app.use(cors())
// app.use(express.static('Static'))
app.use(express.json())
app.use('/Babies', Babies)
app.use('/Group', Group)
app.use('/Meal', Meal)
app.use('/Dose', Dose)

// app.use('/api/user',userMongoose)
// app.use('/api/Category',category)
// app.use('/api/Swimsuit',newproduct)
// app.use('/api/Order',Order)

app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).send('Error Happend')
})
app.use((req, res, next) => {
    res.status(404).sendFile(myPath.join(__dirname, './static/pageNotFind.html'));
})
logger.error("ho no!");
app.listen(port, () => {
    logger.info(`app listening at http://llocalhost:${port}`)
})





