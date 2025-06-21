const fs = require('fs');
const input = './files/input.txt';
const output = './files/output.txt';

function manageFiles() {
    fs.readFile(input, 'utf8', (err, data) => {
        if (err) {
            console.error('Error in reading input file:', err);
            return;
        }

        fs.appendFile(output, data + '\n', err => {
            if (err) {
                console.error('Error in adding to output file:', err);
                return;
            }

            console.log('Data Added using callbacks.');
        });
    });
}

manageFiles();