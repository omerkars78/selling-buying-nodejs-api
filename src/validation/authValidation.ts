import Joi from 'joi';

// Register Validation Schema
export const registerSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    nickname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(), // Şifrenin minimum uzunluğunu 6 karakter olarak belirledim.
    //confirmPassword: Joi.string().min(6).required(), // Şifrenin minimum uzunluğunu 6 karakter olarak belirledim.
    genderId: Joi.number().required(),
    birthday: Joi.date().less('now').optional(), // Geçerli bir tarih ve bugünden önce olmalı.
    userType: Joi.number().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    district: Joi.string().optional(),
    school: Joi.string().optional(),
    detailedAddress: Joi.string().optional(),
    profileImage: Joi.string().uri().optional(), // Profil resmi URL formatında olmalı.
});

// Login Validation Schema
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
