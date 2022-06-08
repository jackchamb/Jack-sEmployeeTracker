const inquirer = require('inquirer');
class inquirerFunctions {
    constructor(type, name, choices, message) {
        this.type = type;
        this.name = name;
        this.choices = choices;
        this.message = message;
    }
    ask() {
        const askObject = {
            type: this.type,
            name: this.name,
            message: this.message,
    }
    if (this.choices) {
        return askObject
    } else {
        askObject.choices = this.choices;
        return askObject
    }
    }
}
module.exports = inquirerFunctions;