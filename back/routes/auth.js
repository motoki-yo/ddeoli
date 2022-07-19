import 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET || '';

export function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      req.user = decoded;
      next();
    });
};