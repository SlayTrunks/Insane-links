const { default: connectDb } = require("./connect");
import Links from './model'

export default async function handler(req,res){
    connectDb()
    if(req.method === 'POST'){
        try {
            await Links.create(req.body)
            await res.status(200).send('created')
            
        } catch (error) {
            res.status(400).send(error)
        }
    }
    else{
        res.status(400).send('not post')
    }
}