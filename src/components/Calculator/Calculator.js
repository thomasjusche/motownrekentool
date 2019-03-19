import React, { Component } from 'react';

import apartmentOptions from './apartmentOptions';

class Calculator extends Component {
  state = {
    ...apartmentOptions,
    selectedOptions: {
      placement: null,
      floor: 0,
      floorSize: 63,
    },
  }

  calculateTotalPrice = () => 5.67

  render() {
    const totalPrice = this.calculateTotalPrice();
    const { selectedOptions } = this.state;
    return (
      <div>
        {totalPrice}
        {' '}
        {selectedOptions.floorSize}
      </div>
    );
  }
}

export default Calculator;
