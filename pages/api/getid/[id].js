const { default: connectDb } = require("../connect");
import Links from '../model'

export default async function handler(req,res){
    connectDb()
    if(req.method === "GET"){
        const id = req.query.id
       try {
        const user = await Links.findOne({username:id})
        res.status(200).json(user)
       } catch (error) {
        res.status(500).send("Error")
       }
    }
    else{
        res.status(400).send("Error")
    }

}
