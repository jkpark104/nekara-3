import { css } from '@emotion/react';
import { SVGIcon } from '@/components';
import { hideNoControlWarning } from '@/utils';
import { LayoutBase } from './layoutBase';

export default {
  title: 'TaskBox / Templates / LayoutBase',
  component: LayoutBase,
  ...hideNoControlWarning(),
};

const Template = (args) => (
  <LayoutBase
    css={css`
      min-height: 100vh;
    `}
    {...args}
  />
);

export const Default = Template.bind({});

export const HasChildren = Template.bind({});
HasChildren.args = {
  children: (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <div
        css={css`
          padding: 20px;
          text-align: center;
        `}
      >
        <SVGIcon id="pin-active" size={26} />
        <SVGIcon id="pin-active" size={26} />
        <SVGIcon id="pin-active" size={26} />
        <SVGIcon id="pin-active" size={26} />
        <SVGIcon id="pin-deactive" size={26} />
      </div>
    </div>
  ),
};
