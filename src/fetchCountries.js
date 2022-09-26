// import countryListTpl from '../';
// import countryInfoTpl from '../';
import debounce from 'lodash.debounce';

function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    return response.json();
  });



  // https://restcountries.com/v2/{service}?fields={field},{field},{field}
  // https://restcountries.com/v2/all?fields=name,capital,currencies
}

// fetchCountries('ukraine');

function renderCountryList(country) {
  const markupList = countryListTpl(country);
  refs.countryListEl.innerHTML = markupList;
}

function renderCountryInfo(country) {
  const markupInfo = countryInfoTpl(country);
  refs.countryInfoEl.innerHTML = markupInfo;
}
