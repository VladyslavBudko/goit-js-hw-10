import Notiflix from 'notiflix';
export { fetchCountries, onFetchError };

function fetchCountries(name) {
  const base_url = `https://restcountries.com/v3.1/name/${name}`;
  const filter_url = `?fields=name,capital,population,flags,languages`;
  debugger;
  return fetch(base_url + filter_url)
    .then(response => {
      if (!response.ok) {
       return onFetchError;
      }
      return response.json();
    })
    .catch(onFetchError);
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

//Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языковl
