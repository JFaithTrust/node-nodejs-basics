import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const compress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    const sourcePath = join(__dirname, "files/fileToCompress.txt");
    const destinationPath = join(__dirname, "files/archive.gz");

    const readStream = fs.createReadStream(sourcePath);
    const gzip = zlib.createGzip();
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on("finish", () => {
      console.log("File successfully compressed");
    });
  } catch (error) {
    console.error("Error during compression:", error.message);
  }
};

await compress();
