const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://olimjon:ProBook@cluster0-4mo4m.mongodb.net/db?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongodb');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Listening for requests for port 4000');
});