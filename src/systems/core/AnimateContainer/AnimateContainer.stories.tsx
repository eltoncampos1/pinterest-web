import { Meta, Story } from "@storybook/react";

import { AnimateContainer } from ".";

type AnimateContainerProps = {
  animation: "fadeIn" | "rotate";
};

export default {
  title: "AnimateContainer",
  component: AnimateContainer,
} as Meta;

const Template: Story<AnimateContainerProps> = (
  args: AnimateContainerProps
) => <AnimateContainer {...args}>⭐</AnimateContainer>;

export const Container = Template.bind({});
Container.args = {
  animation: "fadeIn",
};
