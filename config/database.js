const mongoose=require('mongoose');
const connection_uri= `mongodb://localhost:27017/tableData`

const configureDB = () => {
    mongoose.connect(connection_uri)
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = configureDB