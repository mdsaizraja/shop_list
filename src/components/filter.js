
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';



export const Filter = () => {
    const [search, setSearch]=React.useState('')
    const dispatch = useDispatch()
    const shopData = useSelector((state) => state);
    const inputRef = useRef('')

  
  


    const searchFilter =(e)=>{
        setSearch(e.target.value)
        dispatch({ type: "SEARCH", payload: shopData.shopName });
  };


    return (
        <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={searchFilter}  />
            
        </div>
    )
    }

export default Filter