import React from 'react';
import './App.css';
import xhr from 'xhr';
import Plot from './plot.js';
import {connect} from 'react-redux';
import {changeLocation, setData, setDates, setTemps, setSelectedTemp, setSelectedDate} from './actions.js';

class App extends React.Component {

  fetchData = (evt) => {
    evt.preventDefault();
    const location = encodeURIComponent(this.props.location);
    const urlPrefix = "http://api.openweathermap.org/data/2.5/forecast?q=";
    const urlSuffix = "&APPID=7f885a80f78f49f408cc23272581f0d3&units=imperial";
    const url = urlPrefix + location + urlSuffix;

    const self = this;

    xhr({
      url: url
      }, (err, data) => {
        const body = JSON.parse(data.body);
        const list = body.list;
        let dates = [];
        let temps = [];

        for(let element of list){
          dates.push(element.dt_txt);
          temps.push(element.main.temp)
        }

        self.props.dispatch(setData(body));
        self.props.dispatch(setDates(dates));
        self.props.dispatch(setTemps(temps));
        self.props.dispatch(setSelectedTemp(null));
        self.props.dispatch(setSelectedDate(''));
      });
  };


  changeLocation = (evt) => {
    this.props.dispatch(changeLocation(evt.target.value));
  }

  onPlotClick = (data) => {
    if(data.points){
      const number = data.points[0].pointNumber;
      this.props.dispatch(setSelectedDate(this.props.dates[number]));
      this.props.dispatch(setSelectedTemp(this.props.temps[number]));
    }
  };

  render() {
    let currentTemp;
    if(this.props.data.list){
      currentTemp = this.props.data.list[0].main.temp;
    }

    return (
    <div>
      <h1>Weather Monitor</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input placeholder={"City, Country"}
              type="text"
              value={this.props.location}
              onChange={this.changeLocation}
            />
          </label>
        </form>
        {(this.props.data.list) ? (
          <div className='wrapper'>
            {(this.props.selected.temp) ? (
                <p className='temp-wrapper'>The temperature on {this.props.selected.date} will be {this.props.selected.temp}°F </p>
              ) : (
                <p className='temp-wrapper'>The current temperature is {currentTemp}°F! </p>
              )}
              <h2>Forecast</h2>
                <Plot
                xData={ this.props.dates }
                yData={ this.props.temps }
                onPlotClick={ this.onPlotClick }
                type="scatter"
                />
          </div>
        ) : null}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);

