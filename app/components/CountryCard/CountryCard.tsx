import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './CountryCard.module.css';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

interface Country {
  id: number,
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: string
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  const router = useRouter();
  return (
    <div className='card mb-4' onClick={() => router.push(`/country/${country.id}`)}>
      <img className={styles.flag} src={country.flags} alt={country.name} />
      <div className='card-body'>
        <h2 className={styles.name}>{country.name}</h2>
        <p className={styles.details}>Population: {country.population}</p>
        <p className={styles.details}>Region: {country.region}</p>
        <p className={styles.details}>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
