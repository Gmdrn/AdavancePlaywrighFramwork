import * as winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.colorize(),
    winston.format.printf((info) =>
      `${info.timestamp} ${info.level}: ${info.stack || info.message}`,
    ),
  ),
  transports: [new winston.transports.Console()],
});

export default logger;