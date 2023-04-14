
import { Button } from '@mui/material';
import './App.css';
import CheckBoxField from './component/CheckBoxField';
import SelectBox from './component/SelectBox';
import TextFieldBox from './component/TextFiledBox'
import Data from "./metaData/Data"


function App() {

  let arr = [...Data]
  
function handelSubmit(){
    Data[0] = arr[0]
  console.log(Data)
}
  return (
    <div className="App">
      <div className='form-container'>

{arr.map((item, i) => {
  switch(item.id){
    case "textfield":
      return(
        <>
          <TextFieldBox
            defaultValue={Data[i].defaultvalue}
            label={Data[i].label}
            type={Data[i].type}
            item = {item}
          ></TextFieldBox>
        </>
      )
    case "select":
      return(
        <>
          <SelectBox
            label={Data[i].label}
            defaultValue={Data[i].defaultvalue}
            placeholder = {Data[i].placeholder}
            options = {Data[i].options}
            item = {item}
          >
          </SelectBox>
        </>
      )
    case "check":
      return(
        <>
          <CheckBoxField
            vlaue={Data[i].value}
            label={Data[i].label}
            defaultValue = {item.defaultvalue}
            item = {item}
          >
          </CheckBoxField>
        </>
      )
  }          
})}
      </div>
      <div className='submit-button'>
        <Button variant='contained' onClick={handelSubmit}> Submit</Button>
      </div>         
    </div>
  );
}

export default App;


