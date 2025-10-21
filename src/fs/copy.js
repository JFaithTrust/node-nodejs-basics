import { promises as fs } from "fs";
import path from "path";

const copy = async () => {
  // Write your code here
  const sourceDir = path.join(process.cwd(), 'src/fs/files');
  const destDir = path.join(process.cwd(), 'src/fs/files_copy');

  try {
    await fs.access(sourceDir).catch(() => {
      throw new Error('FS operation failed');
    });

    const filesCopyExists = await fs.access(destDir).then(() => true).catch(() => false);

    if (filesCopyExists) {
      throw new Error('FS operation failed');
    }

    await fs.cp(sourceDir, destDir, { recursive: true });

    console.log('Folder successfully copied!');
  } catch (error) {
    console.error(error.message);
  }
};

await copy();
