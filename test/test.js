var inquirer = require('inquirer');
var questions = [{
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter: function(val) {
        return val.toLowerCase();
    }
}, ];


inquirer.prompt(questions).then(function(answers) {
    console.log(answers.size);
});
