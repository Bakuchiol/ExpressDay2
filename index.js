
// bringing in express (import)
const express =require('express')

// connects express instance to the variable app
const app = express()

// ------------------------------ REQUIREMENTS
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").
createEngine());


// -----------------middleware
const foods = ["pizza",
                "apple",
                "banana",
                "orange",
                "wine",
                "cake",
                "ice cream",
                "advil",
                "hot pocket"
            ]

// *** create routes based on path ****
// home route
app.get('/', (req,res) => {
    res.send('<h1>Express Homework</h1>')
})

// render jsx file - react
app.get('/home', (req,res) => {
    res.render('Home')
})
// --PRACTICE
app.get('/about', (req,res) => {
    res.render('About')
})
app.get('/grocery', (req,res) => {
    res.render('Grocery')
})


// --------------------------- QUERY PARAMETERS MUST BE AT BOTTOM OF ROUTES!
app.get("/:indexOfInfoFoods", (req,res) => {
    res.send(foods[req.params.indexOfInfoFoods])
})

app.get("/:indexOfInfoFoods", (req,res) => {
    if(foods[req.params.indexOfInfoFoods]){
        res.send(foods[req.params.indexOfInfoFoods] + "sentence after");
    }else{
        res.send('cannot find anything at this index: '
        + req.params.indexOfInfoFoods)
    }
})



app.listen('3000', (req,res) => {
    console.log('Server is now listening on port 3000')
})