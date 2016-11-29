import mainReducer from '../reducers';

describe('mainReducer', () => {
    it('should return the initial state if there is no action passed in', () => {
        expect(mainReducer(undefined, {})).toEqual({
            location: '',
            data: {},
            dates: [],
            temps: [],
            selected: {
                date: '',
                temp: null
            }
        });
    });

    it('should react to an action with the type "CHANGE_LOCATION"', () => {
        let location = "New York City, United States"
        expect(mainReducer(undefined, {
            type: 'CHANGE_LOCATION',
            location: location
        })).toEqual({
            location: location,
            data: {},
            dates: [],
            temps: [],
            selected: {
                date: '',
                temp: null
            }
        });
    });

    it('should react to an action with the type "SET_DATES"', () => {
        let dates = ['2009-09-18', '2010-08-09'];
        expect(mainReducer(undefined, {
            type: 'SET_DATES',
            dates: dates
        })).toEqual({
            location: '',
            data: {},
            dates: dates,
            temps: [],
            selected: {
                date: '',
                temp: null
            }
        });
    });


    it('should react to an action with the type "SET_TEMPS"', () => {
        let temps = ['18', '65'];
        expect(mainReducer(undefined, {
            type: 'SET_TEMPS',
            temps: temps
        })).toEqual({
            location: '',
            data: {},
            dates: [],
            temps: temps,
            selected: {
                date: '',
                temp: null
            }
        });
    });

    it('should react to an action with the type "SET_DATA"', () => {
        let data = { 'apple': 1, 'boy': 2, 'cat': 3 };
        expect(mainReducer(undefined, {
            type: 'SET_DATA',
            data: data
        })).toEqual({
            location: '',
            data: data,
            dates: [],
            temps: [],
            selected: {
                date: '',
                temp: null
            }
        });
    });


    it('should react to an action with the type "SET_SELECTED_TEMP"', () => {
        let temp = '60';
        expect(mainReducer(undefined, {
            type: 'SET_SELECTED_TEMP',
            temp: temp
        })).toEqual({
            location: '',
            data: {},
            dates: [],
            temps: [],
            selected: {
                date: '',
                temp: temp
            }
        });
    });

    it('should react to an action with the type "SET_SELECTED_DATE"', () => {
        let date = '2008-08-09';
        expect(mainReducer(undefined, {
            type: 'SET_SELECTED_DATE',
            date: date
        })).toEqual({
            location: '',
            data: {},
            dates: [],
            temps: [],
            selected: {
                date: date,
                temp: null
            }
        });
    });
});
