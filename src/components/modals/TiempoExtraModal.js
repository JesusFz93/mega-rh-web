import React, { useState } from 'react'
import Modal from 'react-modal'
import "../../styles/styles.css";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export const TiempoExtraModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal
          isOpen={ isOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
         closeTimeoutMS={ 200 }
         className="modal"
         overlayClassName="modal-fondo"
        >
            <h1 className="text-center"> Aviso de tiempo extra </h1>
            <hr />
            <h3 className="alert alert-warning">Este empleado ya cumplio sus 9 horas dobles.</h3>
        </Modal>
    )
}
