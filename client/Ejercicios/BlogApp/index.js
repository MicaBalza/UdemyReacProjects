import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";

// el segundo argumento le dice a redux que vamos a usar un middleware
// redux-thunk : cada vez que dispatch una action, esta se va a mandar a redux-thunk
// esta action puede dar un objeto O UNA FUNCIÓN
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
