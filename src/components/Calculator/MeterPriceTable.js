import React from 'react';

import {
  Paper, Table, TableHead, TableBody, TableRow, TableCell,
} from '@material-ui/core';

const MeterPriceTable = ({ floorSize, basePrice }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Min</TableCell>
          <TableCell>Max</TableCell>
          <TableCell>Factor</TableCell>
          <TableCell>Losse prijs</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {floorSize.map(size => (
          <TableRow key={size.min}>
            <TableCell>{size.min}</TableCell>
            <TableCell>{size.max}</TableCell>
            <TableCell>{size.factor}</TableCell>
            <TableCell>
€
              {Math.round(size.factor * basePrice)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default MeterPriceTable;
