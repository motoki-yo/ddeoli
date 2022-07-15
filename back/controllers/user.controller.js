import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET ?? '';

import UserModel from '../models/user.model.js';

export async function register(req, res) {
    const { email, name, address, password } = req.body;
    try {
        if(await UserModel.findOne({ email: email})) {
            return res.status(500).send({'error': 'Email alredgy registered'});
        }

        let newUser = new UserModel({
            email : email,
            name : name,
            address : address
        });
        newUser.hash_password = await bcrypt.hash(password, 10);

        const createdUser = newUser.save()
        if(createdUser) {
            return res.status(200).send({email, name, address, _id : newUser._id});
        }
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'register error'});
    }
};

export async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email});
        if(!user) { 
            return res.status(500).send({'error': 'Account not found'});
        }

        if(!await bcrypt.compare(password, user.hash_password)) {
            return res.status(500).send({'error': 'Bad credentials'});
        }

        const token = jwt.sign({ _id : user._id, 
                           email : user.email,
                           name : user.name},
                           SECRET);

        return res.status(200).send({token, user});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'login error'});
    }
};

export async function update(req, res) {
    const { email, name, address, oldPassword, newPassword } = req.body;
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);
        if (!user) return res.status(500).send("User not found");            

        if(oldPassword && newPassword) {
            if(!await bcrypt.compare(oldPassword, user.hash_password)) {
                return res.status(500).send({'error': 'Bad credentials'});
            }
            console.log(newPassword)
            user.hash_password = await bcrypt.hash(newPassword, 10);
        }

        user.email = email && email.trim() !== "" ? email : user.email;
        user.name = name && name.trim() !== "" ? name : user.name;
        user.addres = address && address.trim() !== "" ? address : user.phone;

        const updatedUser = await user.save();
        return res.status(200).send({updatedUser});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'update error'});
    }
};