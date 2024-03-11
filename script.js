//ARRAY METHODS

//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Get all the countries from Asia continent /region using Filter function
//Get all the countries with a population of less than 2 lakhs using Filter function
//Print the following details name, capital, flag, using forEach function
//Print the total population of countries using reduce function
//Print the country that uses US dollars as currency.

// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    //  Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log("Countries from Asia:", asiaCountries.map(country => country.name.common));

    //  Get all the countries with a population of less than 2 lakhs using Filter function
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", smallPopulationCountries.map(country => country.name.common));

    //  Print the following details name, capital, flag, using forEach function
    console.log("Details of countries:");
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.svg);
      console.log("----------------------");
    });

    //  Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    //  Print the country that uses US dollars as currency
    const usDollarCountry = data.find(country => 
        country.currencies.hasOwnProperty('USD'));
    if (usDollarCountry) {
      console.log("Country that uses US dollars as currency:", usDollarCountry.name.common);
    } else {
      console.log("No country uses US dollars as currency.");
    }

  })
  .catch(error => console.log("Error fetching data:", error));