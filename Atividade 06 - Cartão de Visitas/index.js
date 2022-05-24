const clc = require("cli-color");

const data = {
    name: "Maurício",
    age: 18,
    occupation: "Student at IFRN",
    email: "mauricio.a.neto@hotmail.com",
    github: "https://github.com/mauriazevedo",
    linkedin: "https://www.linkedin.com/in/mauricio-azevedo-neto",
};

const labels = {
    labelName: "Name: ",
    labelAge: "Age: ",
    labelOccupation: "Occupation",
    labelEmail: "E-mail: ",
    labelGitHub: "Github: ",
    labelLinkedin: "Linkedin: "
};

const coloredLabels = {
    labelName: clc.cyan(labels.labelName),
    labelAge: clc.red(labels.labelAge),
    labelOccupation: clc.yellow(labels.labelOccupation),
    labelEmail: clc.green(labels.labelEmail),
    labelGitHub: clc.blue(labels.labelGitHub),
    labelLinkedin: clc.magenta(labels.labelLinkedin)
}

const message = `
    ${coloredLabels.labelName + data.name}
    ${coloredLabels.labelAge + data.age}
    ${coloredLabels.labelOccupation + data.occupation}
    ${coloredLabels.labelEmail + data.email}
    ${coloredLabels.labelGitHub + data.github}
    ${coloredLabels.labelLinkedin + data.linkedin}
`;

