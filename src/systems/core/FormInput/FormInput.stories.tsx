import { Meta, Story } from "@storybook/react";

import { FormInput } from ".";

type FormInputProps = {
  placeholder: string;
  type: string;
};

export default {
  title: "FormInput",
  component: FormInput,
} as Meta;

const Template: Story<FormInputProps> = (args: FormInputProps) => (
  <FormInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
  placeholder: "Input placeholder",
  type: "text",
};
