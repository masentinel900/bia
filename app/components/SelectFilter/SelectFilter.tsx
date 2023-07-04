import React from 'react';

interface SelectFilterProps {
  onRegionFilter: (value: string) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({ onRegionFilter }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onRegionFilter(value);
  };

  return (
    <div className="select-filter">
      <select id="region-filter" className='form-control' onChange={handleSelectChange}>
        <option selected disabled>Filter by Region</option>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SelectFilter;
