import { GetCityByNameUseCase } from "../../../../application/usecases";
import { GetCityByNameUseCaseInterface } from "../../../../domain/usecases";
import { makeAxiosHttpClient } from "../../infra/http";

export const makeGetCityByName = (): GetCityByNameUseCaseInterface => {
  return new GetCityByNameUseCase(makeAxiosHttpClient());
};
