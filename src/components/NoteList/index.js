import { useState } from 'react';
import PopMenu from '../PopMenu';
import PopConfirm from '../PopConfirm';
import Loader from '../Loader';
import './index.css';

const NoteList = props => {
  const {
    loading,
    data = [],
    currentId = null,
    setCurrentId = () => void(0),
    addNewNote = () => void(0),
    onDelete = () => void(0),
  } = props;

  const [ deleteCount, setDeleteCount ] = useState(0);

  const truncate = (str, maxlength) => str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;

  const handleDelete = () => {
    onDelete(currentId);
    setDeleteCount(state => state + 1);
  };

  return (
    <div className="NoteList">
      {
        loading ? (
          <div className="NoteList_items">
            <Loader />
          </div>
        ) : (
          <ul className="NoteList_items">
            {
              data.map(i => (
                <li
                  key={i.id}
                  className={`NoteList_item_${currentId === i.id ? 'active' : 'default'}`}
                  onClick={() => currentId !== i.id && setCurrentId(i.id)}
                >
                  {truncate(i.title, 22)}

                  {
                    currentId === i.id ? (
                      <PopMenu>
                        <ul>
                          <li>
                            <PopConfirm
                              title="Действительно хотите удалить?"
                              ok="Да"
                              cancel="Нет"
                              onConfirm={handleDelete}
                            >
                              удалить
                            </PopConfirm>
                          </li>
                        </ul>
                      </PopMenu>
                    ) : null
                  }
                </li>
              ))
            }
          </ul>
        )
      }

      <div className="NodeList_footer">
        <div className="NoteList_delete-count">
          <span>{deleteCount} trashed note</span>
        </div>

        <span
          className="NoteList_add-new"
          onClick={addNewNote}
        >Add new note</span>

        <div className="NoteList-search">
          <span>Search everywhere</span>
        </div>
      </div>
    </div>
  );
};

export default NoteList;