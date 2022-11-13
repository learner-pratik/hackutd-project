import React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pdf from "react-to-pdf";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function createData(name) {
    return { name };
  }
function Plan(props) {

    const ref = React.createRef();
    const rows = [
        createData('6363'),
        createData('Ice cream sandwich'),
        createData('Eclair'),
        createData('Cupcake'),
        createData('Gingerbread'),
      ];

  return (
  <React.Fragment >
  <div className="sub-title fancy-text" >The next 2 years look good! </div>
  <div className="table" ref={ref}>
  <TableContainer  component={Paper}>
      <Table   size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <TableCell className="thead">Core Subjects</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    <TableContainer  component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <TableCell className="thead">Elective Subjects</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   </div> 

    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <PictureAsPdfIcon className="downloadIcon" onClick={toPdf}>Generate Pdf</PictureAsPdfIcon>}
      </Pdf>

  </React.Fragment>
  )
 }
  


export default Plan;




