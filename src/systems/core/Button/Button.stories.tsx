import { Meta, Story } from "@storybook/react";

import theme from "../../../styles/theme";
import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const SmallButton = Template.bind({});
SmallButton.args = {
  color: theme.colors.white_primary,
  buttonBg: theme.colors.red_primary,
  children: "Red Button",
};
