import { useState } from 'react';
import { WeatherContext, StateProps } from '../contexts';

export function WeatherProvider({ children }: any) {
  const [state, setState] = useState({} as StateProps);

  return (
    <WeatherContext.Provider value={{ state, setState }}>
      {children}
    </WeatherContext.Provider>
  );
}
