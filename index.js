const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
     {
        type: "input",
        message: "what is the title of your project?",
        name: "title"
     },
     {
        type: "input",
        message: "",
        name: ""
     }
    ])
    .then(res => {
        fs.writeFile(`README.md`, JSON.stringify(res), (err) => {
            if (err){
                console.log(err)
            } else {
                console.log('successfully created README.md')
            }
        })
    })