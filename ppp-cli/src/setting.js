const inquirer = require('inquirer');
const fse = require('fs-extra');
function initSetting() {
    let prompt = [
        {
            type: 'input',
            name: 'projectName',
            message: 'project name',
            validate(input) { // 判断是否必填
                if (!input) {
                    return 'project name is required.'
                }
                if (fse.existsSync(input)) { // 判断是否已存在
                    return 'project name of folder is exist.'
                }
                return true;
            }
        },
        // other prompt  
    ];
    return inquirer.prompt(prompt);
}
module.exports = initSetting;
