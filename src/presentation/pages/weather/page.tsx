import { useCallback, useState } from "react";
import type { GetCityByCoordsUseCaseInterface, GetCityByNameUseCaseInterface, GetWeatherUseCaseInterface } from "../../../domain/usecases";
import { TextField } from "../../components/common/inputs/text-field";
import Loader from "../../components/common/loader/loader";
import Weather from "../../components/common/weather/weather";
import { useWeatherContext } from "../../hooks";
import { PageSafe, PageContainer, PageTitle, Button, TextButton } from "./page-styles";

type PageProps = {
  getCityByName: GetCityByNameUseCaseInterface;
  getCityByCoords: GetCityByCoordsUseCaseInterface;
  getWeather: GetWeatherUseCaseInterface;
}

type ValueProps = {
  message: string;
  isLoader: boolean;
}

export default function Page(props: PageProps) {
  const { getCityByName, getCityByCoords, getWeather } = props;
  const [value, setValue] = useState<ValueProps>({
    message: '',
    isLoader: false
  });
  const { setState } = useWeatherContext();

  function handleChangeText(message: string) {
    setValue(prevState => ({ ...prevState, message }));
  }

  const handleFetch = useCallback(async () => {
    const isEmpty = !!!value;
    if(isEmpty) {
      return
    }
    setValue(prevState => ({ ...prevState, isLoader: true }));
    try {
      const city = await getCityByName.run({ city: value.message });
      if(city) {
        const { lat, lon } = city;
        const coords = await getCityByCoords.run({ lon, lat });
        const weather = await getWeather.run({ lon, lat });

        setState({ city, coords, weather });
      }
    } catch (error) {
      console.error(error);
    }
    setValue(prevState => ({ ...prevState, isLoader: false }));
  }, [value]);

  return (
    <PageSafe>
      <PageContainer>
        <PageTitle>Weather Forecast</PageTitle>
        <TextField
          title="What city name:"
          onChangeText={handleChangeText}
        />
        <Button onPress={handleFetch}>
          <TextButton>Search</TextButton>
        </Button>

        {value.isLoader ? <Loader /> : <Weather />}
      </PageContainer>
    </PageSafe>
  );
}


