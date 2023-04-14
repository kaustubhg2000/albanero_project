import React from 'react'
import Data from "../metadata/Data";
const Form = () => {
  return (
    <div className='form-conatiner'>{
        {
            Data.map((item, i) => {
              switch(item.id){
                case "textfield":
                  return(
                    <>
                    <TextFieldBox
                    onChange={(e)=>{   
                      item.value = e.target.value
                      }    
                    } 
                    className='TextField-Input' label={item.label} 
                    variant="outlined"
                    defaultValue={item.value}
                    style={{marginBottom:"20px"}}/>
                    </>
                  )
              }
            })
          }
    }
    

  </div>     
  )
}

export default Form



{/* <>
            switch(item.id){
              case "textfield":
                return(
                  <>
                  <TextFieldBox
                  onChange={(e)=>{   
                    item.value = e.target.value
                    }    
                  } 
                  className='TextField-Input' label={item.label} 
                  variant="outlined"
                  defaultValue={item.value}
                  style={{marginBottom:"20px"}}/>
                  </> */}