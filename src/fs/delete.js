import { promises as fs } from "fs";
import path from "path";

const remove = async () => {
  // Write your code here
  const filePath = path.join(process.cwd(), "src/fs/files/fileToRemove.txt");

  try {
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      throw new Error("FS operation failed");
    }

    await fs.unlink(filePath);

    console.log("File removed successfully");
  } catch (error) {
    console.error(error.message);
  }
};

await remove();
