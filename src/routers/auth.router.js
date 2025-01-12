import express, { response } from 'express'
import Joi from 'joi';
import {validateRequest} from '../middlewares/validateRequest.js';
import sendResponse from '../helper/sendResponse.js';
import UserModel from '../models/users.model.js';
import bcrypt from 'bcrypt'

const router = express.Router()

const registerValidator = Joi.object({
    fullname: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
})

router.post('/register', validateRequest(registerValidator), async (req, res) => {
    //get user value
    const { fullname, email, password } = req.body 
    
    //find user in db in user model
    const findUser = await UserModel.findOne({ email })
    if (findUser) return sendResponse(res, 401, true, "User Already Exists", null)
    
    // encrypt password
    const bcryptPassword = await bcrypt.hash(password, 12)
    
    //save user to db
    const user = new UserModel({ fullname, email, password:bcryptPassword }).save()
    sendResponse(res, 201, false, "User Registered Successfully", user)
    
})

export default router