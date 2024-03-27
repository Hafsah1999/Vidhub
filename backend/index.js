//express initialization
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const videoRouter = require('./Routers/VideoRouter');
const utilRouter = require('./Routers/Utils')
const shortsRouter = require('./Routers/shortsRouter');




app.use(express.static('./uploads'));


app.use(express.json({limit : "200mb"}));

app.use(cors ({
    origin: ['http://localhost:5173']
}))

app.use('/video', videoRouter)
app.use('/shorts', shortsRouter)

app.use('/util', utilRouter)




app.use(express.static('./uploads'));


app.listen(port, () => {
    console.log('Server running on port : 5000');
})