import React from 'react';

import { RayoutListDemo } from './RayoutListDemo.jsx';

export default {
  title: 'Example/RayoutList',
  component: RayoutListDemo,
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    gap: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    paddingTop: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    paddingBottom: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    paddingLeft: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    paddingRight: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
  }
};

const Template = (args) => <RayoutListDemo {...args} />;

export const HorizontalAlignDefault = Template.bind({});
HorizontalAlignDefault.args = {
  backgroundColor: 'lightgray',
  gap: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  horizontalAlign: 'default',
};

export const HorizontalAlignStart = Template.bind({});
HorizontalAlignStart.args = {
  backgroundColor: 'lightgray',
  gap: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  horizontalAlign: 'start',
};

export const HorizontalAlignCenter = Template.bind({});
HorizontalAlignCenter.args = {
  backgroundColor: 'lightgray',
  gap: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  horizontalAlign: 'center',
};

export const HorizontalAlignEnd = Template.bind({});
HorizontalAlignEnd.args = {
  backgroundColor: 'lightgray',
  gap: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  horizontalAlign: 'end',
};
