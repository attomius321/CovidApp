import {Country} from '../country-list/country.model';

export interface INFO {
  Global: {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
  },

  Countries: Array<Country>
}


