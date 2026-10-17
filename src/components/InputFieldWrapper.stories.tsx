import type { Meta, StoryObj } from "@storybook/react-vite";
import InputFieldIcon from "./InputFieldIcon";
import InputFieldWrapper from "./InputFieldWrapper";

const meta = {
  title: "Components/InputFieldWrapper",
  component: InputFieldWrapper,
} satisfies Meta<typeof InputFieldWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  render: (args) => (
    <InputFieldWrapper {...args}>
      <InputFieldIcon>@</InputFieldIcon>
      <input type="email" placeholder="Email" aria-label="Email" />
    </InputFieldWrapper>
  ),
};

export const WithToggle: Story = {
  render: (args) => (
    <InputFieldWrapper {...args}>
      <InputFieldIcon>*</InputFieldIcon>
      <input type="password" placeholder="Password" aria-label="Password" />
      <button type="button" className="miles-input-field-toggle">
        Show
      </button>
    </InputFieldWrapper>
  ),
};
