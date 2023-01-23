const inquirer = require('inquirer');
const fs = require('fs');

 const title = inquirer.prompt([
     {
        type: "input",
        message: "what is the title of your project?",
        name: "title"
     },{
        type: "input",
        message: "write a short description of your project please",
        name: "description"
     },{
        type:"input",
        message: "please post a link to a screenshot of your project here if applicable",
        name: 'screenshot',
        default: ''
      },{
        type: "confirm",
        message: "will this project need a table of contents?",
        name: "table",
        default: "no"
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
        name: "license",
        message: "what liscense are you using on this project?",
        choices: ['Apache Liscense 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simpliefied" or "FreeBSD" liscense', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0','None', 'Other']
     },{
        type: 'input',
        name: 'Other Liscense',
        Message: 'Please type the name of your license',
        when: (answers) => answers.license === 'Other'
     },{
         type: 'confirm',
         message: 'would you like to badges for this project?',
         name: 'badges',
         default: 'no'
      },
      {
        type: 'input',
        name: 'badge',
        message: 'please paste a link to any badges you would like displayed on your README.md file (optional)',
        default: "",
        when: (answers) => answers.badges === "Yes"
     },{
        type: 'input',
        name: 'features',
        message: 'please list features of your project here',
        default: ""
     },{
        type: 'confirm',
        name: 'contribute',
        message: 'would you like other to be able to contribute to this project?',
        default: 'no'
     },{
        type: 'input',
        name: 'contributions',
        message: 'if you would like others to be able to contribute to this project please write the guidelines for how to contribute here',
        when: (answers) => answers.contribute === 'Yes'
        
     },{
        type: 'confirm',
        name: 'test',
        message: 'would you like to include tests for this project?',
        default: 'no'
     }, {
        type: 'input',
        name: 'tests',
        message: 'if  you would like to include tests for this application/project please provide examples of how to run them here',
        when: (answer) => answer.test === 'Yes'
     }
    ])     
    .then(res => {
        fs.appendFile(`README.md`, `###${res.title}
        ${res.description}
        screenshot of the project${res.screenshot}
        #Install steps: ${res.install}
        #Usage: ${res.usage}
        #Credits: ${res.credits}
        #${res.liscense}
        ${res.badge}
        #Features:
        ${res.features}
        ${res.contributions}
        tests: ${res.tests}`, (err) => {
            if (err){
                console.log(err)
            } else {
                console.log('successfully created README.md')
            }
        })
    })