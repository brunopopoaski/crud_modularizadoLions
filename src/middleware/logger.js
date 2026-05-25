import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({
            filename: "./src/data/logs.log"
        })
    ]
});

export default function logMiddleware(req, res, next) {

    logger.info({
        method: req.method,
        url: req.url
    });

    next();
}