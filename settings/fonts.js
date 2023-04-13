import { css } from "styled-components";

export default {
  display1: css`
    font-family: Degular-display;
    font-size: 88px;
    line-height: 88px;
    font-weight: 400;
    letter-spacing: 0em;
  `,
  display2: css`
    font-family: Degular-display;
    font-size: 64px;
    line-height: 63px;
    font-weight: 400;
    letter-spacing: 0em;
  `,

  h1: css`
    font-family: Degular-display;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0em;
    font-weight: 400;
  `,
  h2: css`
    font-family: KHTeka;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0em;
    font-weight: 400;
  `,
  preamble: css`
    font-family: KHTeka;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.01em;
    font-weight: 300;
  `,
  body: css`
    font-family: KHTeka;
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
  `,
  link: css`
    font-family: KHTeka;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
  `,

  mobile: {
    h1: css`
      font-family: Degular-display;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0em;
      font-weight: 400;
    `,
    h2: css`
      font-family: KHTeka;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0em;
      font-weight: 400;
    `,
    preamble: css`
      font-family: KHTeka;
      font-size: 18px;
      line-height: 20px;
      letter-spacing: 0em;
      font-weight: 400;
    `,
    body: css`
      font-family: KHTeka;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    `,
    link: css`
      font-family: KHTeka;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
    `,
  },
};
