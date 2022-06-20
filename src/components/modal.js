import React from 'react'
import { useState } from 'react';

import { TextField, Button, Dialog, DialogTitle, FormControl, InputLabel, Select, MenuItem, Stack } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import shopReducer from './reducer/shopReducer';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
export const Modal = ({ open, setOpen }) => {
    const [openDate, setOpenDate] = React.useState(new Date().toDateString());
    const [closeDate, setCloseDate] = React.useState(new Date().toDateString());
    const [shopName, setShopName] = useState("")
    const [area, setArea] = useState('');
    const [category, setCategory] = useState('')

    const shopData = useSelector((state) => state)
    const dispatch = useDispatch();
   





    const handleSubmit = (e) => {


        e.preventDefault();


        if (!shopName || !area || !category || !openDate || !closeDate) {
            return window.alert("Please fill in all fields!")



        }
        const data = {
            id:uuidv4(),
            shopName,
            area,
            category,
            openDate,
            closeDate
        };
        console.log(data);
        dispatch({ type: "ADD_SHOP_NAME", payload: data })
        setOpen(false)


    }


    const handleClose = () => {
        setOpen(false);
    };


    const handleShopNameChange = (e) => {
        const { value } = e.target;
        const re = /^[A-Za-z ]+$/;
        if (value === "" || re.test(value)) {
            setShopName(value);
        }


    }




    return (
        <div>
            {open && (

                <Dialog open={open} PaperProps={{ sx: { padding: 2, height: 'auto', width: 488, borderRadius: '10px' } }} style={{ textAlign: 'center' }} >
                    <DialogTitle>Add Shop Details</DialogTitle>




                    <form >
                        <TextField
                            required
                            type="text"
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Shop Name"
                            fullWidth
                            variant="standard"
                            value={shopName}
                            onChange={handleShopNameChange}
                        />
                        <FormControl fullWidth style={{ marginTop: 20 }} >
                            <InputLabel id="demo-simple-select-label">area</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={area}
                                label="Age"
                                onChange={(e) => setArea(e.target.value)}
                            >
                                <MenuItem value="Thane">Thane</MenuItem>
                                <MenuItem value="Pune">Pune</MenuItem>
                                <MenuItem value="Mumbai Suburban">Mumbai Suburban</MenuItem>
                                <MenuItem value="Nashik">Nashik</MenuItem>
                                <MenuItem value="Nagpur">Nagpur</MenuItem>
                                <MenuItem value="Ahmednagar">Ahmednagar</MenuItem>
                                <MenuItem value="Solapur">Solapur</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth style={{ marginTop: 20 }} >
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Age"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value="Grocery">Grocery</MenuItem>
                                <MenuItem value="Butcher">Butcher</MenuItem>
                                <MenuItem value="Baker">Baker</MenuItem>
                                <MenuItem value="Chemist">Chemist</MenuItem>
                                <MenuItem value="Stationery shop">Stationery shop</MenuItem>

                            </Select>
                            <div style={{ marginTop: 20 }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        {/* <DesktopDatePicker
                                        label="Opening Date"
                                        inputFormat="MM/dd/yyyy"
                                        value={openDate}
                                        onChange={handleOpenDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    /> */}

                                        <DatePicker label="Opening Date" renderInput={(params) => <TextField{...params} />}
                                            value={openDate}
                                            onChange={(newValue) => setOpenDate(newValue)}

                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        {/* <DesktopDatePicker
                                        label="closing date"
                                        inputFormat="MM/dd/yyyy"
                                        value={closeDate}
                                        onChange={handleCloseDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    /> */}
                                        <DatePicker label="Closing Date" renderInput={(params) => <TextField{...params} />}
                                            value={closeDate}
                                            onChange={(newValue) => setCloseDate(newValue)}

                                        />


                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </FormControl>

<div style={{float:"right"}}>
                        <Button style={{ color: "red"  ,marginTop:20}} onClick={handleClose} >Cancel</Button>
                        <Button variant="contained" style={{marginTop:20}}type="submit" onClick={handleSubmit}  >Save</Button>
                        </div>
                    </form>

                </Dialog>


            )}

        </div>
    )
}
