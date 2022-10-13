import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum",
    size: 'md'
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      }
    },
    asChild:  {
      control: false,
    },
  }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h2>testando...</h2>,
  },
  argTypes: {
    children:  {
      control: false,
    },
    asChild: {
      control: false,
    }
  }
};
