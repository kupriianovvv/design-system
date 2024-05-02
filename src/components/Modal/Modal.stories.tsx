import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from './Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClose: fn(), isOpened: true, children: <div>asdaddddsds</div> },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};