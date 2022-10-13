import { TextInput, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";

import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="type your e-mail address" />,
  },
};
