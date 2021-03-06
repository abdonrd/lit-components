import { css } from 'lit-element';
import '@vaadin/vaadin-material-styles/color.js';

export default css`
  :host(:not([expanded])) [part='header']::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    opacity: 1;
    z-index: 1;
    background-color: var(--material-divider-color);
  }

  :host([expanded]) [part='header']::before,
  :host([next]) [part='header']::before {
    opacity: 0;
  }

  :host([expanded]:not(:first-child)) {
    margin-top: 16px;
  }

  :host([expanded]:not(:last-child)) {
    margin-bottom: 16px;
  }

  :host([focused]) [part='header'] {
    background: var(--material-secondary-background-color);
  }
`;
