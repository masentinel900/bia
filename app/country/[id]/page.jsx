"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getIdCountry } from '../../services/countryIdService';
import { Country } from '../../types/country';
import styles from './country.module.css';

const Detail = ({params}) => {
const [countries, setCountries] = useState([Country]);
const {id} = params;

  useEffect(() => {
    if (id) {
      fetchCountry();
    }
  }, [id]);

  const fetchCountry = async () => {
    try {
      const data = await getIdCountry(id);
      setCountries(data[0]);
      console.log(data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={countries.flags} alt="" />
        </div>
        <div className='col-md-6'>
          <div
          className='row'>
            <div className='col-md-6'>
              <ul>
                <li><h1>{countries.name}</h1></li>
                <li><p>Native Name: {countries.nativeName}</p></li>
                <li><p>Population: {countries.poulation}</p></li>
                <li><p>Region: {countries.region}</p></li>
                <li><p>Sub Region: {countries.subregion}</p></li>
                <li><p>Capital: {countries.capital}</p></li>
              </ul>
            </div>
            <div className='col-md-6 pt-5'>
            <ul>
                <li><p>Native Name: {countries.nativeName}</p></li>
                <li><p>Population: {countries.poulation}</p></li>
                <li><p>Region: {countries.region}</p></li>
                <li><p>Sub Region: {countries.subregion}</p></li>
                <li><p>Capital: {countries.capital}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
