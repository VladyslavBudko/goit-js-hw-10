
function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        return response.json();
      })
      .then(country => {
        console.log(country);
      })
      .catch(error => {
        console.log(error);
      });
  
    
  
    // https://restcountries.com/v2/{service}?fields={field},{field},{field}
    // https://restcountries.com/v2/all?fields=name,capital,currencies
  
    //Тебе нужны только следующие свойства:
  
    // name.official - полное имя страны
    // capital - столица
    // population - население
    // flags.svg - ссылка на изображение флага
    // languages - массив языков
  }
  
  fetchCountries("ukraine");
  