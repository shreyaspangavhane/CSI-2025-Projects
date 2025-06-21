const fs = require('fs').promises;
const input = './files/input.txt';
const output = './files/output.txt';

function manageFiles() {
    fs.readFile(input, 'utf8')
        .then(data => fs.appendFile(output, data + '\n'))
        .then(() => console.log('Data Added using Promises.'))
        .catch(err => console.error('Error:', err));
}

manageFiles();