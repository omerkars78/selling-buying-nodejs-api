import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from '../services/UserService';

export const signup = async (req: Request, res: Response) => {
    try {
        const { password } = req.body;
        if (!password || password === '') {
            throw new Error('Password is required.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserService.createUser({ ...req.body, password: hashedPassword });
        res.status(201).send(user);
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }
};


export const login = async (req: Request, res: Response) => {
    try {
        const user = await UserService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(400).send('User not found.');
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send('Incorrect password.');
        }

        const token = jwt.sign({ id: user.id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
        res.send({ token });
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const user = await UserService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(400).send('User not found.');
        }

        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
        await UserService.updateUser(user.id, { password: hashedPassword });
        
        res.status(200).send('Password successfully updated.');
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }
};

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = (jwt.verify(req.headers.authorization as string, 'YOUR_SECRET_KEY') as any).id;
        const user = await UserService.getUserById(userId);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('User not found.');
        }
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const userId = (jwt.verify(req.headers.authorization as string, 'YOUR_SECRET_KEY') as any).id;
        await UserService.updateUser(userId, req.body);
        res.status(200).send('Profile successfully updated.');
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }


    
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await UserService.deleteUser(Number(req.params.userId));
        res.status(200).send('User deleted successfully.');
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }
};

export const freezeUser = async (req: Request, res: Response) => {
    try {
        await UserService.freezeUser(Number(req.params.userId));
        res.status(200).send('User account frozen successfully.');
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }
};

export const unfreezeUser = async (req: Request, res: Response) => {
    try {
        await UserService.unfreezeUser(Number(req.params.userId));
        res.status(200).send('User account unfrozen successfully.');
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An error occurred.');
        }
    }
};

export const logout = (req: Request, res: Response) => {
  
    res.status(200).send('Successfully logged out.');
};
