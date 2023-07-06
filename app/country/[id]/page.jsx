"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getIdCountry } from '../../services/countryIdService';
import { Country } from '../../types/country';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Header from '../../components/Header/Header';
import styles from './country.module.css';

const Detail = ({params}) => {
const [countries, setCountries] = useState([Country]);
const {id} = params;
const router = useRouter();

  useEffect(() => {
    if (id) {
      fetchCountry();
    }
  }, [id]);

  const fetchCountry = async () => {
    try {
      const data = await getIdCountry(id);
      setCountries(data[0]);
      console.log(`Juandi : ${countries}`);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  return (
    <>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <div className='row my-4'>
              <div className='col-md-6 my-4'>
                <button type="button" className="btn btn-outline-dark" onClick={() => router.back() }><AiOutlineArrowLeft /> Back</button>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <img src={countries.flags} alt={countries.flags} />
              </div>
              <div className='col-md-8'>
                <h3>{countries.name}</h3>
                <div className='row mb-5'>
                  <div className='col-md-6'>
                    <ul className={styles.descriptionList}>
                      <li><b>Native Name:</b> {countries.nativeName}</li>
                      <li><b>Population:</b> {countries.poulation}</li>
                      <li><b>Region:</b> {countries.region}</li>
                      <li><b>Sub Region:</b> {countries.subregion}</li>
                      <li><b>Capital:</b> {countries.capital}</li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                  <ul className={styles.descriptionList}>
                      <li><b>Top Level Domain:</b> {countries.tld}</li>
                      <li><b>Currencies</b> {countries.currencies}</li>
                      <li><b>Languages</b> { countries.languages }</li>
                    </ul>
                  </div>
                </div>
                <b>Border Countries:</b> { 
                  (typeof(countries.borders) !== 'undefined' ) ? countries.borders.map((value) => (
                      <button type="button" className=" mx-1 btn btn-sm btn-outline-dark">{value}</button>
                  )) : null
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Detail;
