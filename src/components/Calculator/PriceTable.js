import React from 'react';
import {
  Paper, Table, TableBody, TableRow, TableCell,
} from '@material-ui/core';

const PriceTable = ({ meterPrice = 0, totalPrice = 0, basePrice = 0 }) => (
  <Paper>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Basis meterprijs:</TableCell>
          <TableCell align="right">
€
            {basePrice}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Meterprijs met verdeelsleutel:</TableCell>
          <TableCell align="right">
€
            {meterPrice}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Totaalprijs:</TableCell>
          <TableCell align="right">
€
            {totalPrice}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default PriceTable;
