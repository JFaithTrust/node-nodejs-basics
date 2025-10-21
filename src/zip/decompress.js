import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  // Write your code here

  try {
    const sourcePath = join(__dirname, "files/archive.gz");
    const destinationPath = join(__dirname, "files/fileToUncompress.txt");

    const readStream = fs.createReadStream(sourcePath);
    const gunzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on("finish", () => {
      console.log("Decompression completed successfully.");
    });
  } catch (error) {
    console.error("An error occurred during decompression:", error.message);
  }
};

await decompress();
