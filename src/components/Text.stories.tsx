import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    size: 'md'
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      control: false,
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>testando...</p>,
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
