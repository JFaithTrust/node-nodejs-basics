import fs from "fs/promises";
import path from "path";

const read = async () => {
  // Write your code here
  const filePath = path.join(process.cwd(), "src/fs/files", "fileToRead.txt");

  try {
    const content = await fs.readFile(filePath, "utf-8");

    console.log(content);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await read();
