import React, {useState, useRef, useEffect} from 'react'
import {useKey} from '../hooks/useKey'

export const Bross = () => {
    
    const key = useKey('enter')

    const evento = () => {
        console.log('le diste al evento');
    }

    return (
        <>
        hola
        {
            key && (
                evento()
            )
        }
        
        </>
    )
}
