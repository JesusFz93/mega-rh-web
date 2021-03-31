import React, {useState} from 'react'
import { PropsReceiver } from './PropsReceiver'

export const PropsSender = () => {
    
    
    const [state, setstate] = useState({data:""})
    const [stoit, setStoit] = useState({pol:""})
    
    const changeState = () => {  
        setstate({data:`state/props of parent component 
        is send by onClick event to another component`}); 
     

       setStoit({pol:`ss`}); 
       }; 

    return (
        <>
            PropsSender
            <input type="button" value="Dale click" onClick={changeState} />
            <PropsReceiver param1 = {state.data} param2={stoit.pol}  />
        </>
    )
}
