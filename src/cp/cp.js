import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  // Write your code here
  const scriptPath = path.join(__dirname, "files", "script.js");

  const childProcess = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
  childProcess.stderr.pipe(process.stderr);

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(0);
  });

  childProcess.on("error", (error) => {
    console.error(`Error spawning child process: ${error.message}`);
    process.exit(1);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2"]);
