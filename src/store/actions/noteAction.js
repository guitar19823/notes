import { addNoteAPI, getNoteAPI, getNoteListAPI, updateNoteAPI, deleteNoteAPI } from '../../api/notesAPI';
import {
  SET_NOTE_LIST,
  SET_CURRENT_NOTE,
  SET_LOADING_NOTE,
  SET_LOADING_LIST,
} from '../types';

const setNoteListAction = payload => ({
  type: SET_NOTE_LIST,
  payload,
});

const setCurrentNoteAction = payload => ({
  type: SET_CURRENT_NOTE,
  payload,
});

const setLoadingNoteAction = payload => ({
  type: SET_LOADING_NOTE,
  payload,
});

const setLoadingListAction = payload => ({
  type: SET_LOADING_LIST,
  payload,
});

export const addNote = note => dispatch => {
  dispatch(setLoadingNoteAction(true));

  addNoteAPI(note)
  .then(data => {
    dispatch(setNoteListAction(data.noteList));
    dispatch(setCurrentNoteAction(data.newNote));
  })
  .finally(() => dispatch(setLoadingNoteAction(false)));
};

export const getNote = id => dispatch => {
  dispatch(setLoadingNoteAction(true));

  getNoteAPI(id)
  .then(data => {
    dispatch(setCurrentNoteAction(data));
  })
  .finally(() => dispatch(setLoadingNoteAction(false)));
};

export const getNoteList = () => dispatch => {
  dispatch(setLoadingListAction(true));

  getNoteListAPI()
  .then(data => {
    dispatch(setNoteListAction(data));
  })
  .finally(() => dispatch(setLoadingListAction(false)));
};

export const updateNote = (id, title, text) => dispatch => {
  dispatch(setLoadingNoteAction(true));

  updateNoteAPI(id, title, text)
  .then(data => {
    dispatch(setNoteListAction(data.noteList));
    dispatch(setCurrentNoteAction(data.updatedNote));
  })
  .finally(() => dispatch(setLoadingNoteAction(false)));
};

export const deleteNote = id => dispatch => {
  dispatch(setLoadingNoteAction(true));

  deleteNoteAPI(id)
  .then(data => {
    dispatch(setNoteListAction(data));
    dispatch(setCurrentNoteAction({
      id: null,
      title: '',
      text: '',
    }));
  })
  .finally(() => dispatch(setLoadingNoteAction(false)));
};