import './css/styles.css';
import './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

// refs.inputEl.addEventListener(
//   'input', onSearch

//   debounce(fetchCountries, DEBOUNCE_DELAY)
// );

// function onSearch(event) {
//     event.preventDefault();


// const form = event.currentTarget;
// const searchQuery = form.elements.query.value;


//   fetchCountries('ukraine')
//     .then({ renderCountryList, renderCountryInfo })
//     .catch(error => {
//       console.log(error);
//     })
//     .finally(() => form.reset());
// }

{
//   <li class="country-list_item">
//       <div>
//         <img src="{{flags.svg}}" alt="flag" />
//         {{name.oficial}}
//       </div>
//     </li>
}

{
  /* <li class="country-info_item">
  <div>
    <p class="capital">Capital: {{capital}}</p>
    <p class="population">Population: {{population}}</p>
    <p class="languages">Languages: 
      <ul class="languages-list">
        {{#each}}
          <li class="languages-item">{{#each languages}}</li>
        {{/#each}}
      </ul>
    </p>
  </div>
</li> */
}

//Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
