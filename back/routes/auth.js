import 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET;

module.exports.check_token = (req, res, next) => {
    next();
}  