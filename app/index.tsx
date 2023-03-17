import { makeGetCityByCoords, makeGetCityByName, makeGetWeather } from "../src/main/factories/application/usecases";
import WeatherPage from "../src/presentation/pages/weather/page";
import { WeatherProvider } from "../src/presentation/providers";

export default function Page() {
  return (
    <WeatherProvider>
      <WeatherPage
        getCityByName={makeGetCityByName()}
        getCityByCoords={makeGetCityByCoords()}
        getWeather={makeGetWeather()}
      />
    </WeatherProvider>
  );
}
