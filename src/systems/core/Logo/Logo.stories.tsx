import { Meta, Story } from "@storybook/react";

import theme from "../../../styles/theme";
import { Logo } from ".";

type LogoProps = {
  color: string;
};

export default {
  title: "Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args: LogoProps) => <Logo {...args} />;

export const LogoRed = Template.bind({});
LogoRed.args = {
  color: theme.colors.red_primary,
};
