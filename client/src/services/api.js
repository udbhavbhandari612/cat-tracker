import axios from "axios";

const BASE_URL = "http://localhost:3001/cat";

export const getCats = () => {
  return axios.get(`${BASE_URL}`);
};

export const addCat = ({ cat }) => {
  return axios.post(`${BASE_URL}`, { cat });
};

export const updateCat = ({ id, timeZone }) => {
  return axios.put(`${BASE_URL}`, { id, timeZone });
};

export const deleteCats = ({ id }) => {
  return axios.delete(`${BASE_URL}`, { data: { id } });
};
