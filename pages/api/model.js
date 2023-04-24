const mongoose = require('mongoose')

const schema = new mongoose.Schema({
            username:{
                unique:true,
                required:true,
                type:String
            },
            facebook:String,
            instagram:String,
            twitter:String,
            github:String,
            reddit:String,
            linkedin:String,
})
mongoose.models= {}
export default mongoose.models.Links || mongoose.model('Links',schema)

