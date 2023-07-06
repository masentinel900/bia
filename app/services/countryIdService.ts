import { Country } from '../types/country';
import { fetchData } from '../utils/api';

export const getIdCountry = async (id: string): Promise<Country[]> => {
  try {
    const response = await fetchData(`https://restcountries.com/v3.1/alpha/${id}`);
    const data = await response.json();
    const countries: Country[] = data.map((countryData: any) => {
    const currency = Object.keys(countryData.currencies);
      return {
        name: countryData.name.common,
        population: countryData.population,
        nativeName: countryData.name.official,
        region: countryData.region,
        subregion: countryData.subregion,
        capital: countryData.capital,
        flags: countryData.flags.png,
        tld: countryData.tld,
        currencies: currency,
        languages: Object.values(countryData.languages).join(', '),
        borders: (typeof(countryData.borders) !== 'undefined') ? Object.values(countryData.borders) : []
      };
    });

    return countries;
  } catch (error) {
    console.error('Error al obtener los países:', error);
    return [];
  }
};
