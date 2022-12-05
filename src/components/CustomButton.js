import React from 'react'
import CustomButton from './CustomButton.module.css'

export default function Button(props) {
    const [disable, setDisable] = React.useState(false);
    const handleEvent = () => {
        console.log('congrate!!!');
        setDisable(true);    
        
    }
  return (
    <div className={CustomButton.btn}>
    <button type = 'submit' disabled = {disable} onClick={handleEvent}>{props.text}</button>
    </div>
    
  )
}
