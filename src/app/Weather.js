export class Weather {
	constructor(city){
		this.apikey = '4f082115f0fd33a8a660d8ea13369f0b'
		this.city = city
	}

	async getWeather(){
		const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=metric`
		const data = await fetch(URI)
		return data;
	}

	changeLocation(city){
		this.city = city
	}
}