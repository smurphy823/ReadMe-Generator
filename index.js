// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the tile of your project?"
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?"
    },
    {
        type: "input",
        name: "description",
        message: "write a brief drscription about your project"
    },
    {
        type: "list",
        name: "license",
        message: "what kind of license does your project have?",
        choices: ["MIT", "BSD 3", "APACHE 2.0", "None"]
    },
    {
        type: "input",
        name: "install",
        message: "How do install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "what command should be run for testing?"
    },
    {
        type: "input",
        name: "usage",
        message: "what do I need to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "what do I need to know about contributing to the repo?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        writeToFile("readMe.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
