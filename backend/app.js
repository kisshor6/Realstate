const express = require('express');
const cors = require('cors');
require('./DB/_DB')


const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routers/user'))
app.use('/api/sell', require('./routers/sell'))

app.listen(port, () => {
    console.log(`======> listening at port no ${port} <=====`);
})