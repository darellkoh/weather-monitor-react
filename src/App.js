import React from 'react';
import './App.css';
import xhr from 'xhr';

class App extends React.Component {
  state = {
    location: ''
  };

  fetchData = (evt) => {
    evt.preventDefault();
    const location = encodedURIComponent(this.state.location);
    const urlPrefix = "http://api.openweathermap.org/data/2.5/forecast?q=";
    const urlSuffix = "&APPID=7f885a80f78f49f408cc23272581f0d3&units=imperial";
    const url = urlPrefix + location + urlSuffix;

    console.log('fetching data for: ', {this.state.location});

    xhr({
      url: url
      }, (err, data) => {

      }
    });

  };

  changeLocation = (evt) => {
    this.setState({
      location: evt.target.value
    });
  }

  render() {
    return (
    <div>
      <h1>Weather App</h1>
        <form onSubmit={ this.fetchData }>
          <label>I want to know the weather for
            <input placeholder={ "City, Country" } type="text"
            value={ this.state.location }
            onChange={ this.changeLocation }

            />
          </label>
        </form>
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
