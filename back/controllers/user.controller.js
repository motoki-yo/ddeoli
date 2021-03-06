import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET || '';

import UserModel from '../models/user.model.js';

export async function register(req, res) {
    const { email, name, address, phone, password } = req.body;
    try {
        if(await UserModel.findOne({ email: email})) {
            return res.status(500).send({'error': 'Email already registered'});
        }

        let newUser = new UserModel({
            email : email,
            name : name,
            phone : phone,
            address : address
        });
        console.log(password)
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
    const { email, name, address, phone, oldPassword, newPassword, isAdmin } = req.body;
    console.log(req.body)
    const id = req.params.id;

    try {
        let user = await UserModel.findById(id);
        if (!user) return res.status(500).send("User not found");            

        if(oldPassword && newPassword) {
            if(!await bcrypt.compare(oldPassword, user.hash_password)) {
                return res.status(500).send({'error': 'Bad credentials'});
            }
            console.log(newPassword)
            user.hash_password = await bcrypt.hash(newPassword, 10);
        }

        user.email = email;
        user.name = name;
        user.address = address;
        user.phone = phone;
        user.isAdmin = isAdmin;

        const updatedUser = await user.save();
        return res.status(200).send({updatedUser});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'update error'});
    }
};

export async function remove(req, res) {
    const { id } = req.body;

    try {
        const count = await UserModel.findByIdAndDelete(id);
        if (!count) return res.status(500).send("User not found");            

        return res.status(200).send({message: "Delete succesful"});
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'update error'});
    }
};

export async function getUser(req, res) {
    const id  = req.user._id;

    try {
        const user = await UserModel.findById(id);
        if (!user) return res.status(500).send("User not found");            

        return res.status(200).send(user);
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'update error'});
    }
};

export async function getUsers(req, res) {
    try {
        const users = await UserModel.find({});
        if (!users) return res.status(500).send("Users not found");            

        return res.status(200).send(users);
    } catch(e) {
        console.log(e)
        return res.status(500).send({'error': 'find error'});
    }
};