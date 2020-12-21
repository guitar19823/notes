import { data } from './data';

export const addNoteAPI = note => new Promise(resolve => {
  data.push(note);

  setTimeout(() => {
    resolve({
      noteList: data.map(i => ({
        id: i.id,
        title: i.title,
      })).reverse(),
      newNote: data.find(i => i.id === note.id),
    });
  }, Math.ceil(Math.random() * 500));
});

export const getNoteAPI = id => new Promise(resolve => {
  setTimeout(() => {
    resolve(data.find(i => i.id === id));
  }, Math.ceil(Math.random() * 500));
});

export const getNoteListAPI = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(
      data.map(i => ({
        id: i.id,
        title: i.title,
      })).reverse(),
    );
  }, Math.ceil(Math.random() * 1500));
});

export const updateNoteAPI = (id, title, text) => new Promise(resolve => {
  data.forEach((i, idx) => i.id === id && (data[idx] = {
    ...i,
    title,
    text,
  }));

  setTimeout(() => {
    resolve({
      noteList: data.map(i => ({
        id: i.id,
        title: i.title,
      })).reverse(),
      updatedNote: data.find(i => i.id === id),
    });
  }, Math.ceil(Math.random() * 500));
});

export const deleteNoteAPI = id => new Promise(resolve => {
  const idx = data.findIndex(i => i.id === id);

  data.splice(idx, 1);

  setTimeout(() => {
    resolve(
      data.map(i => ({
        id: i.id,
        title: i.title,
      })).reverse(),
    );
  }, Math.ceil(Math.random() * 500));
});