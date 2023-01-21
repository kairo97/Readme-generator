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
        default: "no"
     },
     {
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
        name: "license",
        message: "what liscense are you using on this project?",
        choices: ['Apache Liscense 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simpliefied" or "FreeBSD" liscense', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0','None', 'Other']
     },{
        type: 'input',
        name: 'Other Liscense',
        Message: 'Please type the name of your license',
        when: (answers) => answers.license === 'Other'

     },{
        type: 'input',
        name: 'badge',
        message: ''
     },{}

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