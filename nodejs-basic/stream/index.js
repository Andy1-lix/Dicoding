const fs = require('fs');
const { resolve } = require('path');
const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});
const writableStream = fs.createWriteStream('./output.txt');

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
}
);

readableStream.on('end', () => {
    console.log('Done');
}
);

fs.readFile(resolve(__dirname, 'input.txt'), 'UTF-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Isi file: ', data);
}
);