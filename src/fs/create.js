import { promises as fs } from "fs";
import path from "path";

const create = async () => {
  // Write your code here
  const filePath = path.join(process.cwd(), "src/fs/files/fresh.txt");

  try {
    await fs.access(filePath);

    throw new Error("FS operation failed");
  } catch(err) {
    if (err.code === "ENOENT") {
      const dirPath = path.dirname(filePath);

      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(filePath, "I am fresh and young", "utf-8");

      console.log("File created successfully!");
    } else {
      console.error(err.message);
    }
  }
};

await create();
