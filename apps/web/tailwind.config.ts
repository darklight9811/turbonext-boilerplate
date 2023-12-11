// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@app/config/tailwind/preset.ts";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", "../../packages/ui/**/*.tsx"],
  presets: [sharedConfig as any],
};

export default config;
