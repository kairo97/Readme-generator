const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
     {
        type: "input",
        message: "what is the title of your project?",
        name: "title"
     }, {
        type: "input",
        message: "write a short description of your project please",
        name: "description"
     }, {
        type: "confirm",
        message: "will this project need a table of contents?",
        name: "table",
        default: "No"
     }, {
        type: "input",
        message: "what are the steps for installation?",
        name: "install",
        when: (answers) => answers.table === "Yes"

     }, {
        type: "input",
        message: "what are the steps for usage?",
        name: "usage",
        when: (answers) => answers.table === "Yes"
     }, {
        type: "input",
        message: "list everyone you need to credit on this project",
        name: "credits",
        default: "",
        when: (answers) => answers.table === "Yes"
     },{
        type: "list",
        name: "liscense",
        message: "what liscense are you using on this project?",
        choices: [""]
     }
     
    ])
    // .then(res => {
    //     fs.writeFile(`README.md`, JSON.stringify(res), (err) => {
    //         if (err){
    //             console.log(err)
    //         } else {
    //             console.log('successfully created README.md')
    //         }
    //     })
    // })