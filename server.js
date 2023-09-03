const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const db = require('mongoose')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(express.static('pages'));



db.connect('mongodb+srv://adielh1983:EBSV2020@cluster0.9mgf7qw.mongodb.net/ecoUsers', () => {
    console.log('db on');
})


app.get("/signIn", (req, res) => {
    res.sendFile(__dirname + "/pages/signIn.html")
})
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/pages/signup.html")
})
app.get("/incomes", (req, res) => {
    res.sendFile(__dirname + "/pages/incomes.html")
})
app.get("/outcomes", (req, res) => {
    res.sendFile(__dirname + "/pages/outcomes.html")
})
app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/pages/welcome.html")
})



const userHome = db.Schema({
    firstName: String,
    lastName: String,
    email: String,
    userId: Number,
    password: String,
    taxes: Number,
    house: Number,
    market: Number,
    transportation: Number,
    medical: Number,
    education: Number,
    pleasure: Number,
    clothing: Number,
    pets: Number,
    net: Number,
    totalsum: Number,
    monthlyIncomes: Number,
    extraIncome1: Number,
    extraIncome1Date: Number,
    extraIncome2Date: Number,
    extraIncome3Date: Number,
    incomes: {
        jan: Number,
        feb: Number,
        mar: Number,
        apr: Number,
        may: Number,
        jun: Number,
        jul: Number,
        aug: Number,
        sep: Number,
        oct: Number,
        nov: Number,
        dec: Number

    },
    monthOutcome: Number

});

const ecoUsers = db.model('useres', userHome);

app.post('/signIn', (req, res) => {

    const findUser = async () => {

        let resultData = await ecoUsers.findOne({ email: req.body.email, password: req.body.password })
        res.json(resultData);
        console.log(resultData);



    }


    findUser()



})

app.post('/details', (req, res) => {

    let temp = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.userEmail,
        userId: req.body.userId,
        password: req.body.userPassword,
        taxes: 0,
        house: 0,
        market: 0,
        transportation: 0,
        medical: 0,
        education: 0,
        pleasure: 0,
        clothing: 0,
        pets: 0,
        net: 0,
        totalsum: 0
    }


    const addUserToDb = async (user) => {
        await ecoUsers.insertMany(user)
        console.log('user add to db');
        res.sendFile(__dirname + '/pages/signIn.html');
    }
    addUserToDb(temp);




})








app.post('/outcomes', (req, res) => {

    let temp = {
        taxes: req.body.taxes,
        house: req.body.house,
        market: req.body.market,
        transportation: req.body.transportation,
        medical: req.body.medical,
        education: req.body.education,
        pleasure: req.body.pleasure,
        clothing: req.body.clothing,
        pets: req.body.pets,
        net: req.body.net,
        totalsum: req.body.totalsum,
        nameOfUser: req.body.firstName



    }

    console.log(temp.nameOfUser);
    console.log(temp);
    const findAndUpdate = async () => {
        let updateData = await ecoUsers.findOneAndUpdate({ firstName: temp.nameOfUser }, {
            $set: {
                taxes: temp.taxes,
                house: temp.house, market: temp.market,
                transportation: temp.transportation,
                medical: temp.medical,
                education: temp.education,
                pleasure: temp.pleasure,
                clothing: temp.clothing,
                pets: temp.pets,
                net: temp.net,
                totalsum: temp.totalsum
            }
        });
        res.json(updateData)

    }
    findAndUpdate()





})

app.post('/incomes', (req, res) => {

    let temp1 = {
        jan: req.body.jan,
        feb: req.body.feb,
        mar: req.body.mar,
        apr: req.body.apr,
        may: req.body.may,
        jun: req.body.jun,
        jul: req.body.jul,
        aug: req.body.aug,
        sep: req.body.sep,
        oct: req.body.oct,
        nov: req.body.nov,
        dec: req.body.dec,
        nameOfUser: req.body.firstName



    }

    console.log(temp1.nameOfUser);
    console.log(temp1);
    const findAndUpdateIncomes = async () => {
        let updateData = await ecoUsers.findOneAndUpdate({ firstName: temp1.nameOfUser }, {
            $set: {
                incomes: {

                    jan: temp1.jan,
                    feb: temp1.feb,
                    mar: temp1.mar,
                    apr: temp1.apr,
                    may: temp1.may,
                    jun: temp1.jun,
                    jul: temp1.jul,
                    aug: temp1.aug,
                    sep: temp1.sep,
                    oct: temp1.oct,
                    nov: temp1.nov,
                    dec: temp1.dec
                }
            }
        });
        res.json(updateData)

    }
    findAndUpdateIncomes()





})
app.post('/currentOutcome', (req, res) => {

    let temp2 = {
     monthOutcome:req.body.newOutcome,
        
        nameOfUser: req.body.firstName



    }

    console.log(temp2.nameOfUser);
    console.log(temp2.monthOutcome);
    console.log(temp2);
    const findAndUpdateOutcomes = async () => {
        let updateData = await ecoUsers.findOneAndUpdate({ firstName: temp2.nameOfUser }, {
            $inc: {
                monthOutcome:temp2.monthOutcome
            }
        });
        res.json(updateData)

    }
    findAndUpdateOutcomes()





})





app.listen(3000, () => {
    console.log('server works ');
})