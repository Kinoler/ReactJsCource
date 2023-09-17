import FocusTrap from 'focus-trap-react';
import { Portal } from 'react-portal';
import './Dialog.css';
import { ReactNode } from 'react';

interface DialogProps {
  title: string | ReactNode;
  onClose: () => void;
  children: ReactNode;
}

function Dialog({title, onClose, children}: DialogProps) {
  return (
    <Portal>
        <FocusTrap focusTrapOptions={{
                    tabbableOptions: {
                        displayCheck: 'legacy-full'
                    }
                }}>
            <div id="modal-dialog" className="modal" >
                <div className="modal-wrap">
                    <div className="header">
                        <h2 className="modal-title">{title}</h2>
                        <button className="closeButton" onClick={() => onClose()}>X</button>
                    </div>
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </FocusTrap>
    </Portal>
  );
};

export default Dialog;