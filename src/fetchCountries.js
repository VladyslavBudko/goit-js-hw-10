import Notiflix from 'notiflix';
export { fetchCountries, onFetchError };

function fetchCountries(name) {
  const base_url = `https://restcountries.com/v3.1/name/${name}`;
  const filter_url = `?fields=name,capital,population,flags,languages`;
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
