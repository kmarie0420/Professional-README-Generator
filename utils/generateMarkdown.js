const licenseChoice = (data) => {
    if(data.license === "[None]") {
        return ''
    } else if (data.license === "[MIT]") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (data.license === "[Apache]") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
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