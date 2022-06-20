import * as React from "react";
import { useState } from "react";
import { Modal } from "./modal";

import { Paper, Button } from "@mui/material";
import { ShopList } from "./shopList";
import EditShop from "./editShop";
import Filter from "./filter";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export const Shop = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = React.useState('');
  
  

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: "auto",
    margin: "20px auto",
    borderRadius: "16px",
  };
  return (
    <Paper elevation={10} style={paperStyle} className="paper">
      <h1 style={{ textAlign: "center" }}> SHOP LIST</h1>
      <div>
        {" "}
        <Button onClick={handleClickOpen} variant="contained">
          Add
        </Button>{" "}
        
      
        </div>
      

      <div>
        <Modal open={open} setOpen={setOpen} />
      </div>
      
<div style={{float:"right"}}>
<Filter   />
</div>
<FormControl  style={{float:"right",width:190}} >
  <InputLabel id="demo-simple-select-label">Search By Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Search By Category"
    onChange={handleChange}
  >
    <MenuItem value={10}>Shop Name</MenuItem>
    <MenuItem value={20}>Area</MenuItem>
    <MenuItem value={30}>Category</MenuItem>
    <MenuItem value={30}>Date</MenuItem>
  </Select>
</FormControl>  
      <ShopList style={{float:"right"}} />

      
      
    
    </Paper>
  );
};
