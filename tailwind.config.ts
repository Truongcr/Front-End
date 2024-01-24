import type { Config } from "tailwindcss";
import { withAnimations } from "animated-tailwindcss";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default withAnimations(config as any);
