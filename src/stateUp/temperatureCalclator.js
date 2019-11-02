import React, { Component } from 'react'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
class TemperatureInput extends Component { 
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        // this.setState({
        //     temperature: e.target.value
        // })
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
          <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input
              value={temperature}
              onChange={this.handleChange} />
    
          </fieldset>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'f'
        })
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        
        return (
            <div>
                <TemperatureInput 
                    temperature={celsius} 
                    scale="c" 
                    onTemperatureChange={this.handleCelsiusChange} 
                />

                <TemperatureInput 
                    temperature={fahrenheit} 
                    scale="f" 
                    onTemperatureChange={this.handleFahrenheitChange} 
                />

                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}