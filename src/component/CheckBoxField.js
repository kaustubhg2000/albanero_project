import React from 'react'
import { FormControlLabel, Checkbox } from '@mui/material'
const CheckBoxField = ({value, label, defaultValue, item}) => {
  return (
    <div>
        <div>
            <FormControlLabel 
            control={<Checkbox checked={value} />} 
            className='Check-Input' 
             onChange={e => {
              item.value = (!item.value)
            }}
            label={label}/>

    </div>
    </div>
  )
}

export default CheckBoxField
