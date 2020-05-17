import { createStore, compose } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// create your reducer
const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "TICK":
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// create a makeStore function
const makeStore = (context) => createStore(reducer, composeEnhancers())

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

