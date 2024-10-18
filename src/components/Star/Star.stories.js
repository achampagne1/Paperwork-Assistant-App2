import { Star } from ".";

export default {
  title: "Components/Star",
  component: Star,
  argTypes: {
    size: {
      options: [
        "sixteen",
        "twenty-four",
        "forty-eight",
        "twenty",
        "thirty-two",
        "forty",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "sixteen",
  },
};
