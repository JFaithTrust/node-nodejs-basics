import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      callback(null, reversedChunk);
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
