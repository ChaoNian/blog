const initCommand = require('./command.js');
const initSetting = require('./setting.js');
const output = require('./output.js');
module.exports = class Creation {
    constructor() {
        // code 
    }
    do() {
        initCommand();
        initSetting().then(setting => {
            // 用户输入完成后，会得到全部输入信息的json数据 setting    
            console.log(setting, 'setting');
            this._setting = Object.assign({}, this._setting, setting);
            // 输出文件           
            output(this).then(res => {
                // 项目输出完成  
            });

        });
    }
}

    // other function
    // Creation.copy('gitignore', projectResolve('.gitignore'))