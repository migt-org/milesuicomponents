import type { Meta, StoryObj } from "@storybook/react-vite";
import ResponseStatus from "./ResponseStatus";

const meta = {
  title: "Components/ResponseStatus",
  component: ResponseStatus,
  args: { children: "Saved successfully" },
} satisfies Meta<typeof ResponseStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { className: "success" },
};

export const Failed: Story = {
  args: {
    className: "failed",
    role: "alert",
    children: "Something went wrong",
  },
};
