import React from 'react'
import Button from '../components/CustomButton'

export default function ForgetPass() {
  return (
    <div>
    <div>
        <label for = 'name'>Name</label>
        <input type = 'text' id = 'name' placeholder='enter your name'></input>
    </div>
    <Button text = 'Submit'></Button>
    </div>
  )
}
