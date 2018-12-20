import axios from 'axios';

export default {
  fetchCharacters() {
    return axios.get('https://swapi.co/api/people')
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  fetchCharacterById(id) {
    console.log('Api received ID', id);
    return axios.get(`https://swapi.co/api/people/${id}/`)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  fetchPlanetById(id) {
    return axios.get(`https://swapi.co/api/planets/${id}/`)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
