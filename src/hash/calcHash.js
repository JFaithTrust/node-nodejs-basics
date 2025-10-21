import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';

const calculateHash = async () => {
  // Write your code here
  const filePath = resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => hash.update(chunk));
  stream.on('end', () => console.log(hash.digest('hex')));
  stream.on('error', (err) => console.error('Error reading file:', err.message  ));
};

await calculateHash();
