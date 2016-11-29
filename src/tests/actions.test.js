import {
  changeLocation,
  setSelectedDate,
  setSelectedTemp,
  setData,
  setDates,
  setTemps
} from '../actions';

describe('actions', () => {
  describe('changeLocation', () => {
    it('should have a type of "CHANGE_LOCATION"', () => {
      expect(changeLocation().type).toEqual('CHANGE_LOCATION');
    });
    it('should pass on the location we pass into it', () => {
      let location = 'New Orleans, Louisiana';
      expect(changeLocation(location).location).toEqual(location);
    });
  });

  describe('setSelectedDate', () => {
    it('should have a type of "SET_SELECTED_DATE"', () => {
      expect(setSelectedDate().type).toEqual('SET_SELECTED_DATE');
    });
    it('should pass on the date we pass into it', () => {
      let date = '2010-11-05';
      expect(setSelectedDate(date).date).toEqual(date);
    });
  });

  describe('setSelectedTemp', () => {
    it('should have a type of "SET_SELECTED_TEMP"', () => {
      expect(setSelectedTemp().type).toEqual('SET_SELECTED_TEMP');
    });
    it('should pass on the temperature we pass into it', () => {
      let temp = '55';
      expect(setSelectedTemp(temp).temp).toEqual(temp);
    });
  });

  describe('setData', () => {
    it('should have a type of "SET_DATA"', () => {
      expect(setData().type).toEqual('SET_DATA');
    });
    it('should pass on the data we pass into it', () => {
      let data = {'a': 1, 'b': 2, 'c': 3};
      expect(setData(data).data).toEqual(data);
    });
  });

  describe('setDates', () => {
    it('should have a type of "SET_DATES"', () => {
      expect(setDates().type).toEqual('SET_DATES');
    });
    it('should pass on the dates we pass into it', () => {
      let dates = ['2011-09-11', '2012-01-09'];
      expect(setDates(dates).dates).toEqual(dates);
    });
  });

  describe('setTemps', () => {
    it('should have a type of "SET_TEMPS"', () => {
      expect(setTemps().type).toEqual('SET_TEMPS');
    });
    it('should pass on the temperatures we pass into it', () => {
      let temps = ['38', '20', '80'];
      expect(setTemps(temps).temps).toEqual(temps);
    });
  });
});

