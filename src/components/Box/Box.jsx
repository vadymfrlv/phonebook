import styled, { css } from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  fontWeight,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  fontWeight,
  ({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `,
  ({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `
);
