import { AxiosHttpClient } from "../../../../infra";
import { makeAxios } from "./axios-factory";

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient(makeAxios());
};
