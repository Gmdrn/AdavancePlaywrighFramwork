import winston from 'winston';

const {combine, timestamp, printf, colorize, errors} = winston.format;
const LOG_LEVEL = process.env.LOG_LEVEL ?? 'info';

const lineFormat = printf(({level, message, timestamp: time, scope, stack}) => {
	const tag = scope ? ` [${String(scope)}]` : '';
	return `${time} [${level}]${tag} ${stack || message}`;
});

export const logger = winston.createLogger({
	level: LOG_LEVEL,
	format: combine(
		errors({stack: true}),
		timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
	),
	transports: [
		new winston.transports.Console({
			format: combine(
				colorize({level: true}),
				timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
				lineFormat,
			),
		}),
		new winston.transports.File({
			filename: 'logs/combined.log',
			format: combine(
				timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
				lineFormat,
			),
		}),
	],
});

export function createLogger(scope: string): winston.Logger {
	return logger.child({scope});
}

export type Logger = winston.Logger;

export default logger;