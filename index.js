const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('WoW I am Excited learn to the node server and express')
})
const users = [
    {id: 0, name:"shabana", email:'shabana@gamil.com', phone:'01700000000'},
    {id: 1, name:'Rujina', email:'shabana@gamil.com', phone:'01700000000'},
    {id: 2, name:'Poli', email:'shabana@gamil.com', phone:'01700000000'},
    {id: 3, name:'Shabnaz', email:'shabana@gamil.com', phone:'01700000000'},
    {id: 4, name:'Shahnur', email:'shabana@gamil.com', phone:'01700000000'}

]

app.get('/users', (req, res)=>{
    const search =  req.query.search;
    if(search){
        const searchResult = users.filter(user=> user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
})

app.post('/users',(req, res)=>{
    const newUser = req.body;
    const id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/fruits', (req, res)=>{
    res.send(['orange', 'banana', 'fineApple', 'jackFruit'])
})

app.get('/fruits/mangoes/fazle', (req, res)=>{
    res.send('Yammy Yammay tok Mango');
})

app.listen(port, ()=>{
    console.log('listening to the port ', port);
})