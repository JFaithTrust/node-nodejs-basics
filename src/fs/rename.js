import { promises as fs } from "fs";
import path from "path";

const rename = async () => {
  // Write your code here
  const dirPath = path.join(process.cwd(), "src/fs/files");
  const oldPath = path.join(dirPath, "wrongFilename.txt");
  const newPath = path.join(dirPath, "properFilename.md");

  try {
    const oldExists = await fs
      .access(oldPath)
      .then(() => true)
      .catch(() => false);
    const newExists = await fs
      .access(newPath)
      .then(() => true)
      .catch(() => false);

    if (!oldExists || newExists) {
      throw new Error("FS operation failed");
    }

    await fs.rename(oldPath, newPath);

    console.log("File renamed successfully!");
  } catch (error) {
    console.error(error.message);
  }
};

await rename();
