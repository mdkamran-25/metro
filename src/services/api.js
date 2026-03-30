import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

export const metroAPI = {
  getStations: () => axios.get(`${API_BASE_URL}/stations`),
  getRoute: (from, to) => axios.get(`${API_BASE_URL}/route?from=${from}&to=${to}`),
  getFare: (from, to, passengerType, journeyType) => 
    axios.get(`${API_BASE_URL}/fare?from=${from}&to=${to}&passengerType=${passengerType}&journeyType=${journeyType}`),
  getStationDetails: (id) => axios.get(`${API_BASE_URL}/station/${id}`),
}