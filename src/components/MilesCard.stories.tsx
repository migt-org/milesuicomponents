import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import MilesCard from "./MilesCard";

const meta = {
  title: "Components/MilesCard",
  component: MilesCard,
  args: { style: { padding: "1rem", width: "18rem" } },
} satisfies Meta<typeof MilesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <MilesCard {...args}>
      <p>Card content</p>
      <Button>Action</Button>
    </MilesCard>
  ),
};
