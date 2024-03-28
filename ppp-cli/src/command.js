const commander = require('commander');
const chalk = import('chalk');
const packageJson = require('../package.json');
const log = console.log;
function initCommand() {
    commander.program.version(packageJson.version).on('--help', () => {
        chalk.green // undefined
        // log(chalk.green('run testcli and edit the setting.'));
    }).parse(process.argv);
}
module.exports = initCommand;

