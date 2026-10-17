import type { Meta, StoryObj } from "@storybook/react-vite";
import Loader from "./Loader";

const meta = {
  title: "Components/Loader",
  component: Loader,
  args: { wrapperStyle: { height: 200 } },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
