const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dbConnect = require('./utils/dbConnect');
const allUserRouter = require('./routes/v1/user.route');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

// middle ware 
app.use(cors());
app.use(express.json());

// Database Connect 
dbConnect();

app.use('/api/v1/users', allUserRouter);

app.get('/', (req, res) => {
      res.send((`hello from Mahsez_server ${port}`));

});

app.all("*", (req, res) => {
    res.send('No Route Found')
});

//app.use(errorHandler);

app.listen(port, () => {
    console.log(`Mahsez_server app listening on port${port})`);
});

process.on("unhandledRejection", (err) =>{
    console.log(err.name, err.message);
    app.close( () =>{
        process.exit(1);
    })
});