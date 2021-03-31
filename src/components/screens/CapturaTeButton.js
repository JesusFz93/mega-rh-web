import React from 'react'
import moduleName from 'module'
import { startDeletingElements } from '../../actions/dbActions';
import { useDispatch } from 'react-redux';



export const CapturaTeButton = ({
    index,
    lista
}) => {
    const dispatch = useDispatch();

    const deleteElement = (idDelete, lista) => {

        dispatch(startDeletingElements(idDelete, lista));
      }

    return (
        <>
            <button type="button" className="btn btn-danger" onClick={() => deleteElement(index, lista)}>X</button>
        </>
    )
}



/*
import React from 'react'

export const Checkbox = React.forwardRef(({indeterminate, ...rest}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <>
            <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
    )
})*/