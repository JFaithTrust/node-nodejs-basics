import { promises as fs } from "fs";
import path from "path";

const list = async () => {
  // Write your code here
  const dirPath = path.join(process.cwd(), "src/fs/files");

  try {
    const dirExists = await fs
      .access(dirPath)
      .then(() => true)
      .catch(() => false);

    if (!dirExists) {
      throw new Error("FS operation failed");
    }

    const files = await fs.readdir(dirPath);

    console.log(files);
  } catch (error) {
    console.error(error.message);
  }
};

await list();
