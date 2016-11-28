import React from 'react';
import './App.css';
import xhr from 'xhr';
import Plot from './plot.js';

class App extends React.Component {
  state = {
    location: '',
    data: {},
    dates: [],
    temps: []
  };

  fetchData = (evt) => {
    evt.preventDefault();
    const location = encodeURIComponent(this.state.location);
    const urlPrefix = "http://api.openweathermap.org/data/2.5/forecast?q=";
    const urlSuffix = "&APPID=7f885a80f78f49f408cc23272581f0d3&units=imperial";
    const url = urlPrefix + location + urlSuffix;

    const self = this;

    xhr({
      url: url
      }, (err, data) => {
        const body = JSON.parse(data.body);
        const list = body.list;
        console.log('list', list);
        let dates = [];
        let temps = [];

        for(var element of list){
          dates.push(element.dt_txt);
          temps.push(element.main.temp)
        }
        console.log('dates arr', dates);
        console.log('temps arr', temps);

        self.setState({
          data: body,
          dates: dates,
          temps: temps
        });
      });
  };

  changeLocation = (evt) => {
    this.setState({
      location: evt.target.value
    });
  }

  render() {
    let currentTemp;
    if(this.state.data.list){
      currentTemp = this.state.data.list[0].main.temp;
    }

    return (
    <div>
      <h1>Weather Monitor</h1>
        <form onSubmit={ this.fetchData }>
          <label>I want to know the weather for
            <input placeholder={ "City, Country" } type="text"
            value={ this.state.location }
            onChange={ this.changeLocation }
            />
          </label>
        </form>
        {(this.state.data.list) ? (
          <div className="wrapper">
              <p className="temp-wrapper">
                <span className="temp">{ currentTemp }</span>
                <span className="temp-symbol">°F</span>
              </p>
              <h2>Forecast</h2>
                <Plot
                xData={ this.state.dates }
                yData={ this.state.temps }
                type="scatter"
                />
          </div>
          ) : null}
      </div>
    );
  }
}

export default App;



// dt_txt: time of weather prediction
// temp: expected temperature
// temp_min: min, expected
// temp_max: min, expected
// weather[0].main: string description of weather at that time
