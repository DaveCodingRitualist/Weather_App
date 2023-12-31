class Forecast{
  constructor(){
    this.key = '682500PcukwQUtq1UDd6XimUfAmBA5HL';
    this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI =  'http://dataservice.accuweather.com/locations/v1/cities/search';
  }

async updateCity(city) {
  const cityDets = await this.getCity(city);
  const weather = await this.getWeather(cityDets.Key);
  return { cityDets, weather };
}

// get city information
async getCity(city){
  const query = `?apikey=${this.key}&q=${city}`;
  const response = await fetch(this.cityURI + query);
  const data = await response.json();

  return data[0];
}
// get weather information
async getWeather (id){
  const query = `${id}?apikey=${this.key}`;
  const response = await fetch(this.weatherURL + query);
  const data = await response.json();
  return data[0];
}
}



