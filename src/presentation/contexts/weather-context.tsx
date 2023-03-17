import { createContext, Dispatch, SetStateAction } from 'react';
import type { GetCityByNameUseCaseInterface, GetCityByCoordsUseCaseInterface, GetWeatherUseCaseInterface } from '../../domain/usecases';

export type StateProps = {
  city: GetCityByNameUseCaseInterface.Output;
  coords: GetCityByCoordsUseCaseInterface.Output;
  weather: GetWeatherUseCaseInterface.Output;
}

export type WeatherContextProps = {
  state: StateProps;
  setState: Dispatch<SetStateAction<StateProps>>;
}

export const WeatherContext = createContext({} as WeatherContextProps);
