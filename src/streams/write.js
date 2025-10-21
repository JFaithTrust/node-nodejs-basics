import { createWriteStream } from "node:fs";
import { resolve } from "path";

const write = async () => {
  // Write your code here
  const filePath = resolve("src/streams/files/fileToWrite.txt");

  const stream = createWriteStream(filePath);

  process.stdin.pipe(stream);

  stream.on("finish", () => {
    console.log("Data has been written to the file successfully.");
  });

  stream.on("error", (err) => {
    console.error("Error writing to the file:", err.message);
  });
};

await write();
