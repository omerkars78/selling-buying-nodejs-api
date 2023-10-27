import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/reset-password', authController.resetPassword);
router.get('/profile', authController.getProfile);
router.put('/update-profile', authController.updateProfile);
router.post('/logout', authController.logout);

export default router;
