import type { Config } from "tailwindcss";
import sharedConfig from "@app/config/tailwind/preset.ts";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig as any],
};

export default config;
