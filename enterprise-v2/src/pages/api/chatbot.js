/*
import BotResponse from '../../app/scripts/bot'

export default async function handler(req, res) {
   
    if (req.method === 'POST') {
        if(req.body.input=='dispatch'){
            console.log('entraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa************')
             return res.status(200).json({ author: 'Louis', message:'hola en que puedo ayudarte??'});
        }

        let r = await BotResponse(req.body.input)
         return res.status(200).json({ author: 'Louis', message:r});
    }


}
*/