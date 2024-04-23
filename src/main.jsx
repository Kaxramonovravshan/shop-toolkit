import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./main.css";
import "rodal/lib/rodal.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./utils/store";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
