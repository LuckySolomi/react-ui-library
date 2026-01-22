import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <>
        {visible && (
          <Toast
            type="success"
            message="Success! Data saved."
            duration={3000}
            closable
            onClose={() => setVisible(false)}
          />
        )}
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <>
        {visible ? (
          <Toast
            type="error"
            message="Something went wrong."
            duration={5000}
            closable
            onClose={() => setVisible(false)}
          />
        ) : null}
      </>
    );
  },
};

export const Info: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <>
        {visible ? (
          <Toast
            type="info"
            message="This is an info message."
            duration={2000}
            closable
            onClose={() => setVisible(false)}
          />
        ) : null}
      </>
    );
  },
};
