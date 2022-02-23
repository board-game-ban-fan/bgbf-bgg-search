import React from "react";
import ReactDOM from "react-dom";
import BggSearchInput from "./BggSearchInput";

export default function injectBggSearchInputByDom(Dom, props) {
  ReactDOM.render(
    <React.StrictMode>
      <BggSearchInput {...props} />
    </React.StrictMode>,
    Dom
  );

  return () => {
    ReactDOM.unmountComponentAtNode(Dom);
  };
}
