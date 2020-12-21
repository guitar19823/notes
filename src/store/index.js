import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { noteReducer } from "./reducers/noteReducer";

const rootReducer = combineReducers({
  note: noteReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);