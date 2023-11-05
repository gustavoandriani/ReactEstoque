import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

BasicTable.propTypes = {
  tableHead: PropTypes.number,
  tableContent: PropTypes.any
}

export default function BasicTable({ tableHead, tableContent}) {
  return (
    <TableContainer component={Paper} sx={{ margin: "1rem" }}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          {
                tableHead === 3 ? (
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Qtd.</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                ) : tableHead === 2 ? (
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                ) : null
            }
        </TableHead>
        <TableBody>
          { tableContent }
        </TableBody>
      </Table>
    </TableContainer>
  );
}