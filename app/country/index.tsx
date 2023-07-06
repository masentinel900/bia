"use client";

import React, { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard/CountryCard';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SelectFilter from '../components/SelectFilter/SelectFilter';
import { getAllCountries } from '../services/countryService';
import { Country } from '../types/country';

const HomePage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const data = await getAllCountries();
    setCountries(data);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleRegionFilter = (value: string) => {
    setRegionFilter(value);
  };

  const filteredCountries = countries.filter(country => {
    const nameMatch = country.name.toLowerCase().includes(searchValue.toLowerCase());
    const regionMatch = regionFilter ? country.region.toLowerCase() === regionFilter.toLowerCase() : true;
    return nameMatch && regionMatch;
  });

  return (
    <>
      <div className="header-container d-flex justify-content-between my-3">
          <SearchBar onSearch={handleSearch} onRegionFilter={function (event: React.ChangeEvent<HTMLSelectElement>): void {
            throw new Error('Function not implemented.');
          } } />
          <SelectFilter onRegionFilter={handleRegionFilter} />
        </div>
        {filteredCountries.map(country => (
          <div className="col-md-3">
            <CountryCard key={country.name} country={country} onClick={() => {}} />
          </div>
        ))}
    </>
  );

};

export default HomePage;
