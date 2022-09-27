import './css/styles.css';
import API from './fetchCountries';
import getRefs from './get-refs';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  event.preventDefault();

  const form = event.target;
  const searchQuery = form.value.trim();

  if (!searchQuery) {
    refs.countryListEl.innerHTML = '';
    refs.countryInfoEl.innerHTML = '';
    return;
  }

  API.fetchCountries(searchQuery)
    .then(country => {
      if (country.length !== 1) {
        refs.countryInfoEl.innerHTML = '';
        return renderCountryList(country);
      }
      renderCountryInfo(country);
      renderCountryList(country);
    })
    .catch(onFetchError);
}

function renderCountryList(country) {
  if (country.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  const markupList = countryListTpl(country);
  refs.countryListEl.innerHTML = markupList;
}

function renderCountryInfo(country) {
  const markupInfo = countryInfoTpl(country);
  refs.countryInfoEl.innerHTML = markupInfo;
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

function countryListTpl(country) {
  return country
    .map(({ flags, name }) => {
      return `
      <li class="country-list_item" 
      style="list-style:none; margin-bottom:20px; 
      display:flex; align-items: center;">
          <img style="max-width:10%; margin-right:20px" src="${flags.svg}" alt="${name.official}" />
          <div>${name.official}</div>
      </li>`;
    })
    .join('');
}

function countryInfoTpl(country) {
  const languagesAll = Object.values(country[0].languages).join(', ');

  return country
    .map(({ capital, population }) => {
      return `
    <p class="capital">Capital: ${capital}</p>
    <p class="population">Population: ${population}</p>
    <p class="languages">Languages: ${languagesAll}</p>`;
    })
    .join('');
}
