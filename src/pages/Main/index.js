import React, { Component } from 'react';
import { Container, Buttons } from './styles';
import Button from '~components/Button';
import Display from '~components/Display';

class Main extends Component {
  state = {
    displayValue: 0,
  };

  addDigit = (digit) => {
    this.setState({ displayValue: digit });
  };

  clear = () => {
    this.setState({ displayValue: 0 });
  };

  setOperation = (operation) => {};

  render() {
    return (
      <Container>
        <Display value={this.state.displayValue} />
        <Buttons>
          <Button triple label="AC" onClick={this.clear} />
          <Button operation label="/" onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button operation label="*" onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button operation label="-" onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button operation label="+" onClick={this.setOperation} />
          <Button double label="0" onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button operation label="=" onClick={this.setOperation} />
        </Buttons>
      </Container>
    );
  }
}

export default Main;
