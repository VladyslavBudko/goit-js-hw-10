// import countryListTpl from '../';
// import countryInfoTpl from '../';
import debounce from 'lodash.debounce';

function fetchCountries(name) {
    const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url).then(response => response.json());
  };

// fetchCountries('ukraine');


  // https://restcountries.com/v2/{service}?fields={field},{field},{field}
  // https://restcountries.com/v2/all?fields=name,capital,currencies

export default { fetchCountries };


