import { useContext } from 'react';
import { WeatherContext } from '../contexts';

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  return context;
};
