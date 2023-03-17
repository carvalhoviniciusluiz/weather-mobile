import { StyleSheet } from "react-native";
import { useWeatherContext } from "../../../hooks";
import Temperature from "../temperature/temperature";
import * as images from '../../../../../assets/images/weather_icons';
import { ImageWeather, H2, FeelsLike, Description, DescriptionText, Span, Strong, Location } from './weather-styles';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View } from "react-native";
import { Container } from './weather-styles';

function Weather() {
  const { state: { weather, city, coords } } = useWeatherContext();

  if (!weather) {
    return <></>
  }

  const { current } = weather;
  const date = new Date(current.dt * 1000);

  function handleFormatter(date: Date){
    const dateTimeFormat = Intl.DateTimeFormat([], {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      timeZone: weather.timezone,
    });
    return dateTimeFormat.format(date);
  }

  function handleDayFormatter(date: Date) {
    const dateTimeFormat = Intl.DateTimeFormat([], {
      weekday: "long",
      timeZone: weather.timezone,
    });
    const [first, ...rest] = dateTimeFormat.format(date);
    return first.toUpperCase().concat(...rest);
  }

  return (
    <Container>
      <View>
        <ImageWeather
          source={
            (images as any)[`_${current.weather[0].icon}`]
          }
        />
        <H2>
          <Temperature temperature={current.temp.toString()} />
        </H2>
        <FeelsLike>
          Feels like <Temperature temperature={current.feels_like.toString()} />
        </FeelsLike>
        <Description>
          <FontAwesome
            name="cloudversify"
            size={18}
          />
          <DescriptionText>{current.weather[0].description}</DescriptionText>
        </Description>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <Strong>{handleDayFormatter(date)}, <Span>{handleFormatter(date)}</Span></Strong>
        <Location>
          <AntDesign
            name="enviroment"
            size={18}
          />
          {coords.name}, {city.country}
        </Location>
      </View>
    </Container>
  )
}

export default Weather;
