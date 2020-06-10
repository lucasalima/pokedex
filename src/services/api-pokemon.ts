import axios from 'axios';

class ApiPokemon {
  baseURL = 'https://pokeapi.co/api/v2/pokemon';

  public getList(baseURL?: string) {
    const apiUrl = baseURL ? baseURL : this.baseURL;

    return axios.get(`${apiUrl}`);
  }

  public getDetail(baseURL: string) {
    return axios.get(`${baseURL}`);
  }
}

export default new ApiPokemon();
