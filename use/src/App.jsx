import Header from './components/header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './App.css'
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData] = useState([]);

  const addData = ()=>{
    setData([...data,{name,email}])
    setName("");
    setEmail("");
      // name: name,
      // email: email
    
  }

  const removeItem = (index)=>{
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <>
      <div className='App'>
        <Header />
        <div className='form'>
          <Stack direction="row" spacing={2}>
            <TextField value={name} onChange={(event)=> setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
            <TextField value={email} onChange={(event)=> setEmail(event.target.value)} id="outlined-basic" label="email" variant="outlined" />
            <Button onClick={addData} variant="contained" endIcon={<SendIcon />}>
              ADD
            </Button>
          </Stack>
        </div>

        <div className='data'>
          <div className='list1'>
            <h4>Nmae</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>

          {
            data.map((element, index)=>{
              return(
                <div key={index} className='list'>
            <h4> {element.name} </h4>
            <h4> {element.email} </h4>
            <button className="remove" onClick={()=>removeItem(index)}>

            <DeleteForeverIcon/>
            </button>
          
          </div>
              )
            })
          }
        </div>

      </div>

    </>
  )
}

export default App
