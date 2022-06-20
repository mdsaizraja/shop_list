import React , {useState} from 'react'


import { TextField, Button, Dialog, DialogTitle, FormControl, InputLabel, Select, MenuItem, Stack } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


export const EditShop = (edit,setEdit) => {
    const [openDate, setOpenDate] = React.useState(new Date().toDateString());
    const [closeDate, setCloseDate] = React.useState(new Date().toDateString());
    const [shopName, setShopName] = useState("")
    const [area, setArea] = useState('');
    const [category, setCategory] = useState('')


    return (
        <div>
           {edit &&(
            

                <Dialog edit={edit} PaperProps={{ sx: { padding: 2, height: 'auto', width: 488, borderRadius: '10px' } }} style={{ textAlign: 'center' }} >
                    <DialogTitle>Edit Shop Details</DialogTitle>




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
                            // onChange={handleShopNameChange}
                        />
                        <FormControl fullWidth style={{ marginTop: 20 }} >
                            <InputLabel id="demo-simple-select-label">area</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={area}
                                label="Age"
                               // onChange={(e) => setArea(e.target.value)}
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
                                // onChange={(e) => setCategory(e.target.value)}
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
                                 //           onChange={(newValue) => setOpenDate(newValue)}

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
                                   //         onChange={(newValue) => setCloseDate(newValue)}

                                        />


                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </FormControl>


                        <Button style={{ color: "red" }} >Cancel</Button>
                        <Button variant="contained" type="submit"
                        >Save</Button>
                    </form>

                </Dialog>


)}

        </div>
    )
}
export default EditShop