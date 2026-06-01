import dotenv from "dotenv";

dotenv.config()


export const env = {
    app_user: process.env.DB_USER,
    app_password: process.env.DB_PASSWORD,
    app_port: process.env.PORT
}