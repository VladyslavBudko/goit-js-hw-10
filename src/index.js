import './css/styles.css';
import API from './fetchCountries';
import getRefs from './get-refs';
import Debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.inputEl.addEventListener('input', onSearch);

Debounce(onSearch, DEBOUNCE_DELAY);

function onSearch(event) {
  event.preventDefault();

  const form = event.target;
  const searchQuery = form.value;

  API.fetchCountries(searchQuery)
    .then(renderCountryList)
    .catch(onFetchError)
    .finally(() => console.log(`Ищем ,${searchQuery}`));
}

function renderCountryList(country) {

  const markupList = countryListTpl(country);
  refs.countryListEl.innerHTML = markupList;
}

function renderCountryInfo(country) {
  const markupInfo = countryInfoTpl(country);
  refs.countryInfoEl.innerHTML = markupInfo;
}

function onFetchError(error) {
  alert(`Country not found`);
}

function countryListTpl(country) {

  return country
    .map(({ flags, name }) => {
      return `
      <li class="country-list_item" 
      style="list-style:none; margin-bottom:20px; 
      display:flex; align-items: center;">
          <img style="max-width:10%" src="${flags.svg}" alt="${name.official}" />
          <div>${name.official}</div>
      </li>`;
    })
    .join('');
}

function countryInfoTpl(country) {
  country
    .map(({ capital, population, languages }) => {
      return `<li class="country-info_item">
  <div>
    <p class="capital">Capital: ${capital}</p>
    <p class="population">Population: ${population}</p>
    <p class="languages">Languages: 
      <ul class="languages-list">
        {{#each}}
          <li class="languages-item">${languages}</li>
        {{/#each}}
      </ul>
    </p>
  </div>
</li>`;
    })
    .join('');
}

//Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
