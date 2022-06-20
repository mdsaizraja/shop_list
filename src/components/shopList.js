import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";
import React, { useState } from "react";
import EditShop from "./editShop";
import { useSelector, useDispatch } from "react-redux";


export const ShopList = () => {
   
  const dispatch = useDispatch();
  const shopData = useSelector((state) => state);
  console.log(shopData);

  //   const handleClick = () => {
  //     setEdit(true);
  //   };

  const onClickDelete = (id) => {
    console.log(shopData);
    dispatch({ type: "DELETE_SHOP", payload: id });
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Shop Name</TableCell>
              <TableCell align="right">Area</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Opening Time</TableCell>
              <TableCell align="right">Closing Time</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shopData.map((row, id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.shopName}
                </TableCell>

                <TableCell align="right">{row.area}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.openDate}</TableCell>
                <TableCell align="right">{row.closeDate}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="outlined"
                    style={{ height: 20, marginRight: 5 }}
                    color="secondary"
                    // onClick={handleClick}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    style={{ height: 20 }}
                    color="error"
                    onClick={() => onClickDelete(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     
      {/* edit={edit} setEdit={setEdit}  */}
      
    </div>
  );
};
