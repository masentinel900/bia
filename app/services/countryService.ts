import { Country } from '../types/country';
import { fetchData } from '../utils/api';

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetchData('https://restcountries.com/v3.1/all');
    const data = await response.json();

    const countries: Country[] = data.map((countryData: any) => {
      return {
        id: countryData.ccn3,
        name: countryData.name.common,
        population: countryData.population,
        region: countryData.region,
        capital: countryData.capital,
        flags: countryData.flags.png,
      };
    });

    return countries;
  } catch (error) {
    console.error('Error al obtener los países:', error);
    return [];
  }
};
