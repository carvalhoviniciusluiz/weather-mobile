import { GetCityByCoordsUseCase } from "../../../../application/usecases";
import { GetCityByCoordsUseCaseInterface } from "../../../../domain/usecases";
import { makeAxiosHttpClient } from "../../infra/http";

export const makeGetCityByCoords = (): GetCityByCoordsUseCaseInterface => {
  return new GetCityByCoordsUseCase(makeAxiosHttpClient());
};
