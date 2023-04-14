import React from 'react'
import "./SelectBox.css"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const SelectBox = ({label, defaultValue, placeholder, options}) => {
  return (
    <div className='select-box-container'>
        <FormControl>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                className='select-box'
                labelId='select-label'
                defaultValue={defaultValue}
            >
              {
                  options.map((opt)=><MenuItem value={opt}>{opt}</MenuItem>)
              }

            </Select>
        </FormControl>
    </div>
  )
}

export default SelectBox