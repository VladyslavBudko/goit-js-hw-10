
export default { fetchCountries };

function fetchCountries(name) {
  const base_url = `https://restcountries.com/v3.1/name/${name}`;
  const filter_url = `?fields=name,capital,population,flags,languages`;
  return fetch(base_url+filter_url).then(response => response.json());
}

//Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языковl