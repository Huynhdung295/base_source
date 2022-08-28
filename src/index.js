import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./i18n";
import { App } from "./App";
import { GlobalProvider } from "./contexts";
import { GlobalStyle } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider
    value={{}}
    children={
      <>
        <App />
        <GlobalStyle />
      </>
    }
  />
);
