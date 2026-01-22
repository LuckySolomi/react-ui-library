import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <Input value={value} onChange={setValue} placeholder="Enter text" />;
  },
};

export const Password: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        type="password"
        value={value}
        onChange={setValue}
        placeholder="Enter password"
      />
    );
  },
};

export const Number: Story = {
  render: () => {
    const [value, setValue] = useState("42");
    return <Input type="number" value={value} onChange={setValue} />;
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState("Clear me");
    return <Input value={value} onChange={setValue} clearable />;
  },
};
