import React, { Component } from 'react';

import apartmentOptions from './apartmentOptions';
import PriceTable from './PriceTable';

class Calculator extends Component {
  state = {
    ...apartmentOptions,
    meterPrice: 5770,
    selectedOptions: {
      selectedPlacement: 0,
      selectedFloor: 0,
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

  render() {
    // TODO: Better rounding
    const meterPrice = Math.round(this.calculateMeterPrice());
    const totalPrice = Math.round(this.calculateTotalPrice());
    const { selectedOptions } = this.state;
    return (
      <div>
        <PriceTable meterPrice={meterPrice} totalPrice={totalPrice} />
      </div>
    );
  }
}

export default Calculator;
