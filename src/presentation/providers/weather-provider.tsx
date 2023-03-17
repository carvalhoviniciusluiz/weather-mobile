import { useState } from 'react';
import { WeatherContext, WeatherContextProps } from '../contexts';

export function WeatherProvider({ children }: any) {
  const [state, setState] = useState({} as WeatherContextProps);

  return (
    <WeatherContext.Provider value={{ state, setState }}>
      {children}
    </WeatherContext.Provider>
  );
}
