import { createReadStream } from 'fs';
import { resolve } from 'path';

const read = async () => {
  // Write your code here
  const filePath = resolve('src/streams/files/fileToRead.txt');

  const stream = createReadStream(filePath, 'utf8');

  stream.pipe(process.stdout);
  stream.on('error', (err) => {
    console.error('Error reading the file:', err.message);
  });
};

await read();
