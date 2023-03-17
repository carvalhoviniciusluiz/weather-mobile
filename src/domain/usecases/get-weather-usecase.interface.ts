type HourlyProps = {
  "dt": number;
  "temp": number;
  "feels_like": number;
  "pressure": number;
  "humidity": number;
  "dew_point": number;
  "uvi": number;
  "clouds": number;
  "visibility": number;
  "wind_speed": number;
  "wind_deg": number;
  "wind_gust": number;
  "weather": [
    {
      "id": number;
      "main": string;
      "description": string;
      "icon": string;
    }
  ],
  "pop": number;
  "rain": {
    "1h": number;
  }
};

type DailyProps = {
    "dt": number;
    "sunrise": number;
    "sunset": number;
    "moonrise": number;
    "moonset": number;
    "moon_phase": number;
    "temp": {
      "day": number;
      "min": number;
      "max": number;
      "night": number;
      "eve": number;
      "morn": number;
    },
    "feels_like": {
      "day": number;
      "night": number;
      "eve": number;
      "morn": number;
    },
    "pressure": number;
    "humidity": number;
    "dew_point": number;
    "wind_speed": number;
    "wind_deg": number;
    "wind_gust": number;
    "weather": [
      {
        "id": number;
        "main": string;
        "description": string;
        "icon": string;
      }
    ],
    "clouds": number;
    "pop": number;
    "rain": number;
    "uvi": number;
  };

export interface GetWeatherUseCaseInterface {
  run: (input: GetWeatherUseCaseInterface.Input) => Promise<GetWeatherUseCaseInterface.Output>;
}

export namespace GetWeatherUseCaseInterface {
  export type ApiResponse = {
    "lat": number;
    "lon": number;
    "timezone": string;
    "timezone_offset": number;
    "current": {
      "dt": number;
      "sunrise": number;
      "sunset": number;
      "temp": number;
      "feels_like": number;
      "pressure": number;
      "humidity": number;
      "dew_point": number;
      "uvi": number;
      "clouds": number;
      "visibility": number;
      "wind_speed": number;
      "wind_deg": number;
      "weather": [
        {
          "id": number;
          "main": string;
          "description": string;
          "icon": string;
        }
      ],
      "rain": {
        "1h": number;
      }
    },
    "hourly": HourlyProps[];
    "daily": DailyProps[];
  };
  export type Input = {
    lon: number;
    lat: number;
  };
  export type Output = ApiResponse;
}
