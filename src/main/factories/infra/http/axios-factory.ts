import axios, { AxiosInstance } from 'axios';

export const makeAxios = (): AxiosInstance => {
  return axios.create();
};
