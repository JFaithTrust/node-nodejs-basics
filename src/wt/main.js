import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  // Write your code here
  const numCores = os.cpus().length;
  const results = new Array(numCores);
  let completed = 0;

  return new Promise((resolve) => {
    for (let i = 0; i < numCores; i++) {
      const worker = new Worker(path.join(__dirname, "worker.js"));
      const n = 10 + i;
      worker.postMessage(n);

      worker.on("message", (data) => {
        if (data && data.error) {
          results[i] = { status: "error", data: null };
        } else {
          results[i] = { status: "resolved", data };
        }

        completed++;
        if (completed === numCores) {
          resolve(results);
        }
      });

      worker.on("error", (error) => {
        results[i] = { status: "error", data: null };
        completed++;
        if (completed === numCores) {
          resolve(results);
        }
      });
    }
  });
};

await performCalculations().then(console.log);
