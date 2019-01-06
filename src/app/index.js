'use strict';

require('./css/app.css')

const {Weather} = require('./Weather')
const {UI} = require('./UI')
const {Store} = require('./Store')

const ui = new UI();
const store = new Store()
const city = store.getLocationData()
const weather = new Weather(city);

const fetchWeather = async () => {
	const response = await weather.getWeather()
	const data = await response.json()
	ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
	e.preventDefault()
	const city = document.getElementById('city').value
	weather.changeLocation(city)
	store.setLocationData(city)
	fetchWeather()
})

document.addEventListener('DOMContentLoaded', fetchWeather)