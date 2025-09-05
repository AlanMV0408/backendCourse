import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db.js';

//Creamo un router de express para agrupar rutas relacionadas con la autenticacion
const router = express.Router();

//ruta para registrar un nuevo usuario: POST /auth/register
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
})