const fs = require('fs').promises;
const input = './files/input.txt';
const output = './files/output.txt';

async function manageFiles() {
    try {
        const data = await fs.readFile(input, 'utf8');
        await fs.appendFile(output, data + '\n');
        console.log('Data Addded using Async/Await.');
    } catch (err) {
        console.error('Error:', err);
    }
}

manageFiles();