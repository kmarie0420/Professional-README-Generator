const licenseChoice = (data) => {
    if(data.license === "[None]") {
        return ''
    } else if (data.license === "[MIT]") {
        return `this is mit `
    } else if (data.license === "[Apache]") {
        return `this is apache`
    }
}

const licenseSection = (data) => {
    if(data.license === "[None]") {
        return ''
    } else {
        return `## License
${licenseChoice(data)}`
    }
}



const generateMarkdown = (data) => {
    return `# ${data.projectTitle}
## Description
${data.description}
## Installation
${data.install}
## Contributors
${data.contributing}
${licenseSection(data)}
## Tests
${data.tests}
## Questions
If you have questions about this project, you can email me at ${data.email}
`}

module.exports = generateMarkdown