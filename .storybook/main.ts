import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: any) => {
    // Add path aliases
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@/pages"] = path.resolve(__dirname, "../src/pages");
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "../src/components"
    );

    return config;
  },
};
export default config;
