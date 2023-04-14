import React from 'react'
import { TextField } from '@mui/material'
import "./TextFiledBox.css"
const TextFiledBox = ({label,type, defaultValue, item}) => {

  return (
    <div className='textfield-container'>
            <TextField
                label={label}
                className='text-box'
                type={type}
                defaultValue={defaultValue}
                onChange={(e)=> {
                  item.defaultvalue = e.target.value
                }}
                >
                
            </TextField>
    </div>
  )
}

export default TextFiledBox