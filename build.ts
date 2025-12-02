import { build } from "bun";
import tailwind from "bun-plugin-tailwind";

console.log("Building with Bun and Tailwind...");

const publicEnv = Object.keys(process.env)
  .filter((key) => key.startsWith("BUN_PUBLIC_"))
  .reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(process.env[key]);
    return acc;
  }, {} as Record<string, string>);

const result = await build({
  entrypoints: ["./src/index.html"],
  outdir: "./dist",
  plugins: [tailwind],
  minify: true,
  sourcemap: "external",
  target: "browser",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    ...publicEnv,
  },
});

if (!result.success) {
  console.error("Build failed");
  for (const message of result.logs) {
    console.error(message);
  }
  process.exit(1);
}

console.log("Build successful!");
