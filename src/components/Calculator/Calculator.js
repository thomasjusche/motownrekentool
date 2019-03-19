import React, { Component } from 'react';

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@material-ui/core';
import apartmentOptions from './apartmentOptions';
import PriceTable from './PriceTable';

class Calculator extends Component {
  state = {
    ...apartmentOptions,
    meterPrice: 5770,
    selectedOptions: {
      selectedPlacement: 1,
      selectedFloor: 3,
      selectedFloorSize: 63,
    },
  }

  calculateFloorSizeFactor = () => {
    const { selectedFloorSize } = this.state.selectedOptions;
    const { floorSize } = this.state;
    const factor = floorSize.reduce((accu, curValue) => {
      if (selectedFloorSize >= curValue.min && selectedFloorSize <= curValue.max) {
        return curValue.factor;
      }
      return accu;
    }, 0);
    return factor;
  }

  calculateMeterPrice = () => {
    const {
      placement, floors, meterPrice, selectedOptions,
    } = this.state;
    const { selectedPlacement, selectedFloor } = selectedOptions;

    const floorSizeFactor = this.calculateFloorSizeFactor();

    return (
      meterPrice
      * floors[selectedFloor].factor
      * placement[selectedPlacement].factor
      * floorSizeFactor
    );
  }

  calculateTotalPrice = () => {
    const { selectedFloorSize } = this.state.selectedOptions;
    const meterPrice = this.calculateMeterPrice();
    return meterPrice * selectedFloorSize;
  }

  handleChange = (e, field) => {
    const { selectedOptions } = this.state;
    this.setState({
      selectedOptions: {
        ...selectedOptions,
        [field]: +e.target.value,
      },
    });
  }

  render() {
    // TODO: Better rounding
    const adjustedPrice = Math.round(this.calculateMeterPrice());
    const totalPrice = Math.round(this.calculateTotalPrice());
    const {
      selectedOptions, placement, floors, meterPrice,
    } = this.state;
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Plek in gebouw</FormLabel>
          <RadioGroup
            aria-label="Placement"
            name="selectedPlacement"
            value={`${selectedOptions.selectedPlacement}`}
            onChange={e => this.handleChange(e, 'selectedPlacement')}
          >
            {placement.map((place, index) => (
              <FormControlLabel
                value={`${index}`}
                key={place.name}
                control={<Radio />}
                label={`${place.name} (${place.factor})`}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Verdieping</FormLabel>
          <RadioGroup
            aria-label="Verdieping"
            name="selectedFloor"
            value={`${selectedOptions.selectedFloor}`}
            onChange={e => this.handleChange(e, 'selectedFloor')}
          >
            {floors.map((place, index) => (
              <FormControlLabel
                value={`${index}`}
                key={place.name}
                control={<Radio />}
                label={`${place.name} (${place.factor})`}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <TextField
          id="standard-number"
          label="Grootte woning in meters"
          value={selectedOptions.selectedFloorSize}
          onChange={e => this.handleChange(e, 'selectedFloorSize')}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <PriceTable meterPrice={adjustedPrice} totalPrice={totalPrice} basePrice={meterPrice} />
      </div>
    );
  }
}

export default Calculator;
