import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, {Secret} from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET ?? '';

import UserModel from '../models/user.model';

module.exports.register = async (req, res) => {
    return false;
};

module.exports.login = async (req, res) => {
    return false;
};

module.exports.find = async (req, res) => {
    return false;
};