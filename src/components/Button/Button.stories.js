import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "neutral", "subtle"],
      control: { type: "select" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Button",
    hasIconEnd: false,
    hasIconStart: false,
    variant: "primary",
    disabled: false,
    size: "medium",
    className: {},
  },
};
