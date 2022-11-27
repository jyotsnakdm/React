import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function DataTable(data) {
    console.log("data:", data.data);
    const maleCount = data.data.filter(i => i.gender === "male").length;
    const femaleCount = data.data.filter(i => i.gender === "female").length;
    return(<div>
         <TableContainer component={Paper}>
     <Table aria-label="simple table" stickyHeader>
       <TableHead>
         <TableRow>
           <TableCell align="left">Name</TableCell>
           <TableCell align="left">Email</TableCell>
           <TableCell align="left">Gender</TableCell>
           <TableCell align="left">Status</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {data.data.map((row) => (
           <TableRow key={row.id}>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">{row.gender}</TableCell>
            <TableCell align="left">{row.status}</TableCell>
          </TableRow>
         ))}
         <TableRow>
            <TableCell/>
            <TableCell/>
            <TableCell align="left">Subtotal</TableCell>
            <TableCell>Male : {maleCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell/>
            <TableCell/>
            <TableCell/>
            <TableCell>Female : {femaleCount}</TableCell>
          </TableRow>
       </TableBody>
     </Table>
   </TableContainer>
    </div>)
}