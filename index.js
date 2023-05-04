const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const recipe = require('./data/recipe.json');

app.use(cors());



app.get('/', (req, res) => {
    res.send('Test-trakar server running')
})


app.get('/chef', (req, res) => {
    res.send(chef);
});
app.get('/recipe', (req, res) => {
    res.send(recipe);
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})