// adminMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IUserPayload {
    id: number;
    email: string;
    isAdmin: number;
    iat?: number;
    exp?: number;
}

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new Error('No token provided');
        }

        const decoded = jwt.verify(token, 'YOUR_SECRET_KEY') as IUserPayload;
        req.userData = decoded;

        if (decoded.isAdmin !== 1) {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};

export default adminMiddleware;
