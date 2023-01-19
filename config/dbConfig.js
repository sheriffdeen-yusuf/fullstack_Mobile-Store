import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
    dbName: process.env.MYSQL_DATABASE_NAME,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST
}

export default dbConfig;