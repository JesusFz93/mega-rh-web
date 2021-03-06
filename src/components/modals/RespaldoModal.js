import React, { useState } from 'react'

import moment from 'moment';
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker';
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

const now = moment().minutes(0).seconds(0).add(1,'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}

export const CapturaTiempoExtramModal = () => {

    const [ dateStart, setDateStart ] = useState( now.toDate() );
    const [ dateEnd, setDateEnd ] = useState( nowPlus1.toDate() );

    const [formValues, setFormValues] = useState( initEvent );

    const { notes, title, start, end } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleStartDateChange = ( e ) => {
        setDateStart( e );
        setFormValues({
            ...formValues,
            start: e
        })
    }
    
    const handleEndDateChange = ( e ) => {
        setDateEnd( e );
        setFormValues({
            ...formValues,
            end: e
        })
    }

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
            <h1> Nuevo evento </h1>
<hr />
<form className="container">

    <div className="form-group">
        <label>Fecha y hora inicio</label>
        <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={ dateStart }
                        maxDate={dateEnd}
                        className="form-control"
                        format="MM-dd-y"
                    />
    </div>

    <div className="form-group">
        <label>Fecha y hora inicio</label>
        <DateTimePicker
                        onChange={ handleEndDateChange }
                        value={ dateEnd }
                        minDate={dateStart}
                        className="form-control"
                        format="MM-dd-y"
                    />
    </div>

    <hr />
    <div className="form-group">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={ title }
            onChange={ handleInputChange }
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={ notes }
            onChange={ handleInputChange }
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
        </Modal>
    )
}
