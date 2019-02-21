import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
