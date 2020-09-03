const Logger = require("./logger");

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hi');
logger.log('Ken Addams');
logger.log('Regina phalange');
