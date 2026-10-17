import type { Decorator, Preview } from "@storybook/react-vite";
import "../src/styles/styles.css";

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme as string;

  document.documentElement.dataset.theme = theme;
  document.body.style.background = theme === "dark" ? "#000000" : "#ffffff";

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [withTheme],
  parameters: {
    a11y: { test: "error" },
  },
};

export default preview;
