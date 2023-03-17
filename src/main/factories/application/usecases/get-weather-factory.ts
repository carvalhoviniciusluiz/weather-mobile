import { GetWeatherUseCase } from "../../../../application/usecases";
import { GetWeatherUseCaseInterface } from "../../../../domain/usecases";
import { makeAxiosHttpClient } from "../../infra/http";

export const makeGetWeather = (): GetWeatherUseCaseInterface => {
  return new GetWeatherUseCase(makeAxiosHttpClient());
};
