import { API_URL, API_TOKEN } from "@env";
import { type GetWeatherUseCaseInterface } from "../../domain/usecases";
import { type HttpClientInterface, HttpStatusCodeEnum } from "../protocols";

export class GetWeatherUseCase implements GetWeatherUseCaseInterface {
  constructor(
    private readonly httpClient: HttpClientInterface<GetWeatherUseCaseInterface.ApiResponse>
  ) {}

  async run(
    input: GetWeatherUseCaseInterface.Input
  ): Promise<GetWeatherUseCaseInterface.Output> {
    const queryString = new URLSearchParams({
      appid: API_TOKEN,
      exclude: 'minutely',
      units: 'metric',
      lang: 'pt',
      lat: String(input.lat),
      lon: String(input.lon)
    });
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${API_URL}/onecall?${queryString}`
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCodeEnum.ok: {
        return httpResponse.body!
      }
      default:
        throw new Error('UnexpectedError');
    }
  }
}
