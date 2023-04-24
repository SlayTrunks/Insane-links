const mongoose = require('mongoose')

const connectDb = async ()=>{
    mongoose.connect('mongodb+srv://slaytrunks:1234@insane-links.jcmsl6v.mongodb.net/insane-links?retryWrites=true&w=majority').
then(console.log('connected'))
.catch('error')
}
export default connectDb