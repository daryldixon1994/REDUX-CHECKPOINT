import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <h1 className="fontsforweb_fontid_79300">Todo List</h1>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
