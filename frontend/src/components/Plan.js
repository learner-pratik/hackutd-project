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

function Plan(props) {
  const selCourses = props.selectedCourses;
  const ref = React.createRef();

  return (
  <React.Fragment >
    <div className="sub-title fancy-text" >The next 2 years look good! </div>
    <div className="table" ref={ref}>
      <TableContainer  component={Paper}>
        <Table   size="small" aria-label="a dense table">
          <TableHead >
            <TableRow>
              <TableCell className="thead">Tentative Degree Plan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selCourses.map((row) => (
              <TableRow
                key={row.courseNumber}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.courseName+'-'+row.courseNumber}
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




