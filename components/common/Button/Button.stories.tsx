import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const actions: Partial<ButtonProps> = {
  onPress: action('Pressed'),
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...actions,
  children: 'Primary',
  variants: 'primary',
  size: 'medium',
  isDisabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...actions,
  children: 'Secondary',
  variants: 'secondary',
  size: 'medium',
  isDisabled: false,
};
