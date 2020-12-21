import { useEffect, useRef, useState } from 'react';
import Loader from '../Loader';
import './index.css';

const TextRedactor = props => {
  const {
    loading,
    id = null,
    title = '',
    text = '',
    onSave = () => void(0),
  } = props;

  const [ redact, setRedact ] = useState(false);
  const [ activeSave, setActiveSave ] = useState(false);

  const input = useRef();
  const textarea = useRef();

  useEffect(() => {
    setRedact(false);
    setActiveSave(false);
  }, [id, title, text]);

  const handleRedact = () => {
    id && setRedact(state => !state);
    setActiveSave(false);
  };

  const hanleSave = () => {
    redact && activeSave && onSave(id, input.current.value, textarea.current.value);
    setActiveSave(false);
  };

  const handleKeyDown = () => {
    !activeSave && setActiveSave(true);
  };

  return (
    <div className="TextRedactor">
      <div className="TextRedactor_tools-panel">
        <div
          title="Редактировать"
          className={`TextRedactor_redact_${redact && id ? 'active' : 'default'}`}
          onClick={handleRedact}
        />

        <div
          title="Сохранить"
          className={`TextRedactor_save_${activeSave ? 'active' : 'default'}`}
          onClick={hanleSave}
        />
      </div>

      {
        loading ? (
          <Loader />
        ) : (
          redact && id ? (
            <>
              <div className="TextRedactor_title">
                <strong>#</strong>

                <input
                  ref={input}
                  type="text"
                  defaultValue={title}
                  autoFocus={true}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <textarea
                ref={textarea}
                defaultValue={text}
                onKeyDown={handleKeyDown}
              />
            </>
          ) : (
            <>
              <div className="TextRedactor_title">
                <strong># {title}</strong>
              </div>

              <pre>{text}</pre>
            </>
          )
        )
      }
    </div>
  );
};

export default TextRedactor;