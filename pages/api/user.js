// import { connectToDatabase } from "../../util/mongodb";

import connectMongo from '../../utils/connectMongo';
import User from './../../models/user'

connectMongo()




const Test = async (req, res) => {




    if (req.method == 'GET') {
        let user = await User.find();
        return res.status(200).json({ success: true, methos: 'get', data: user });
    }

    else if (req.method == 'POST') {
        let user = await new User({...req.body})
        await user.save();
        return res.status(201).json({ success: true, method: 'post' });
    }
    return res.status(400).json({ success: false });

};


export default Test;