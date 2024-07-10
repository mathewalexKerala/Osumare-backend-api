const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/v1', taskRoutes);

app.use((req,res,next)=>{
    res.status(404).json({error:'entered url doesnot exist'})
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});