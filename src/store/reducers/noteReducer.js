import {
  SET_NOTE_LIST,
  SET_CURRENT_NOTE,
  SET_LOADING_NOTE,
  SET_LOADING_LIST,
} from '../types';

const initialState = {
  noteList: [],
  currentNote: {
    id: null,
    title: '',
    text: '',
  },
  loadingNote: false,
  loadingList: false,
};

const handlers = {
  [SET_NOTE_LIST]: (state, { payload }) => ({
    ...state,
    noteList: payload,
  }),
  [SET_CURRENT_NOTE]: (state, { payload }) => ({
    ...state,
    currentNote: payload,
  }),
  [SET_LOADING_NOTE]: (state, { payload }) => ({
    ...state,
    loadingNote: payload,
  }), 
  [SET_LOADING_LIST]: (state, { payload }) => ({
    ...state,
    loadingList: payload,
  }), 
  DEFAULT: state => state,
};

export const noteReducer = (state = initialState, action) => (handlers[action.type] || handlers.DEFAULT)(state, action);