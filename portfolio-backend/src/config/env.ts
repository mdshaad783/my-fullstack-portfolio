// src/config/env.ts
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Define the shape of the environment variables
interface Env {
    PORT: number;
    NODE_ENV: string;
    DATABASE_URL: string;
    JWT_SECRET: string;
    API_KEY: string;
}

// Validate and export environment variables
const env: Env = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
    API_KEY: process.env.API_KEY || '',
};

// Validate required environment variables
if (!env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in .env');
}

if (!env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in .env');
}

if (!env.API_KEY) {
    throw new Error('API_KEY is not defined in .env');
}

export default env;
