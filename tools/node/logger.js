const chalk = require('chalk');

// Will not output debug information in production environments
module.exports.debug = function (line) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.log(`${chalk.bgBlue.white('DEBUG')} ${line}`);
};

module.exports.success = function (line) {
  console.log(`${chalk.bgGreen.black('OK')} ${line}`);
};

module.exports.info = function (line) {
  console.log(`${line}`);
};

module.exports.warn = function (line) {
  console.log(`${chalk.bgYellow.black('WARN')} ${line}`);
};

module.exports.error = function (line) {
  console.log(`${chalk.bgRed.white('ERROR')} ${line}`);
};
