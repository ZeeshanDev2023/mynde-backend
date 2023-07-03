const mongoose = require('mongoose');
// Connect to MongoDB

mongoose.connect('mongodb+srv://zeeshandev2023:Mynde2023@mynde.hczvhgr.mongodb.net/testing-mynde', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});
