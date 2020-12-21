import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import { pageWrapper } from '../../components/HOC/PageWrapper';
import NoteList from '../../components/NoteList';
import TextRedactor from '../../components/TextRedactor';
import { getNote, getNoteList, updateNote, addNote, deleteNote } from '../../store/actions/noteAction';

const NotePage = () => {
  const { noteList, currentNote, loadingList, loadingNote } = useSelector(state => state.note);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoteList());
  }, [dispatch]);

  const setCurrentId = id => {
    dispatch(getNote(id));
  };

  const onSave = (id, title, text) => {
    dispatch(updateNote(id, title, text));
  };

  const onDelete = id => {
    dispatch(deleteNote(id));
  };

  const addNewNote = () => {
    dispatch(addNote({
      id: Date.now(),
      title: 'New note',
      text: ''
    }));
  };

  return (
    <>
      <Aside loading={loadingList || loadingNote}>
        <NoteList
          loading={loadingList}
          data={noteList}
          currentId={currentNote.id}
          setCurrentId={setCurrentId}
          addNewNote={addNewNote}
          onDelete={onDelete}
        />
      </Aside>

      <Main>
        <TextRedactor
          loading={loadingNote}
          id={currentNote.id}
          title={currentNote.title}
          text={currentNote.text}
          onSave={onSave}
        />
      </Main>
    </>
  );
};

export default pageWrapper(NotePage);