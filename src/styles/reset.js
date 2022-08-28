import { css } from "styled-components";
const ResetGlobal = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
  }
  p {
    margin-bottom: 0;
  }
  html, body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;
export { ResetGlobal as Reset };
