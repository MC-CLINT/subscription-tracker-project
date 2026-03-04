import {config} from 'dotenv';

config({path: `./.env.${process.env.NODE_ENV || 'development'}.local`});

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = Number.parseInt(process.env.PORT, 10) || 3000;


