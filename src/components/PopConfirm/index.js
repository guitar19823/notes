import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';
import './index.css';

const PopConfirm = props => {
  const [ show, setShow ] = useState(false);

  return (
    <>
      <span
        className="PopConfirm-button"
        onClick={() => setShow(true)}
      >{props.children}</span>

      {
        show ? (
          <PopConfirmPanel
            {...props}
            setShow={setShow}
          />
        ) : null
      }
    </>
  );
};

const portal = document.createElement('div');

const PopConfirmPanel = props => {
  const {
    title = 'title',
    ok = 'ok',
    cancel = 'cancel',
    onConfirm = () => {},
    setShow,
  } = props;

  useEffect(() => {
    const root = document.getElementById('root');

    root.appendChild(portal);

    return () => root.removeChild(portal);
  }, []);

  const handleConfirm = async () => {
    await onConfirm();
    setShow(false)
  };

  return createPortal(
    <div className="PopConfirm-black-panel">
      <figure className="PopConfirm">
        <header>
          {title}
        </header>

        <footer>
          <Button
            value={cancel}
            onClick={() => setShow(false)}
          />

          <Button
            value={ok}
            color="red"
            onClick={handleConfirm}
          />
        </footer>
      </figure>
    </div>,
    portal
  );
};

export default PopConfirm;