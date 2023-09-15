import axios from "axios";

axios.defaults.baseURL = 'https://api.thecatapi.com';
axios.defaults.headers.common["x-api-key"] =
  'live_CS15RxYB2h15oWnaJLfsTd7JJzGub9WGX5MRrNvHkIJ55oiBkfo2p7fxU3Dn11jL';


export async function fetchBreeds() {
  const response = await axios.get('/v1/breeds');
  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const response = await axios.get(`/v1/images/search?breed_ids=${breedId}`);
  return response.data;
}