// connecting to mongoDB database
const mongoose = require("mongoose");
const MONGO_URI = 'mongodb+srv://scrumflow:scrumflow@cluster0.eclmp.mongodb.net/ScrumFlow?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'ScrumFlow', // name of database on mongoDB I created
})
.then(() => console.log('connected to mongo DB'))
.catch(err => console.log(err))

const Schema = mongoose.Schema;  // used to create models

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    taskList: [
        {
            isComplete: Boolean,
            content: String,
            completeBy: String
        }
    ],
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
