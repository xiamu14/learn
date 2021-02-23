import { startService, transformSync } from "esbuild";
import { watch } from "chokidar";

const noop = () => {};

// MARKED: update command line

/**
 * Function to update lines when something happens
 * @param input The text you can to print
 * @param isBuiltInput Whether you are printing `Built in x ms` or not
 */

const updateLine = (input: string, isBuiltInput: boolean = false) => {
  const numberOfLines = (input.match(/\n/g) || []).length;
  process.stdout.cursorTo(0, 2);
  process.stdout.clearScreenDown();
  process.stdout.write(input);
  isBuiltInput ? process.stdout.moveCursor(0, -numberOfLines) : noop();
};

// MARKED: build function

/**
 * Builds the code in no time
 */

const build = async () => {
  // start build service
  const service = await startService();
  try {
    process.stdout.cursorTo(0, 2);
    process.stdout.clearLine(0);
    // Get time before build starts
    const timerStart = Date.now();
    // Build code
    await service.build({
      color: true,
      entryPoints: ["./src/index.tsx"],
      outfile: "./dist/index.js",
      // minify: true
      bundle: true,
      sourcemap: false,
      tsconfig: "./tsconfig.json",
      platform: "node",
      logLevel: "error",
      define: {
        "process.env.NODE_ENV": `"production"`,
      },
    });
    // Get time after build ends
    const timerEnd = Date.now();
    updateLine(`Build in ${timerEnd - timerStart}ms.`, true);
  } catch (e) {
    throw e;
  } finally {
    service.stop();
  }
};

// MARKED: start watch

// const watcher = watch(["src/**/*"]);
// console.log("Watching files... \n");
// build();
// watcher.on("change", () => {
//   build();
// });

build();
