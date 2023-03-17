import { API_URL, API_TOKEN } from "@env";
import { type GetCityByNameUseCaseInterface } from "../../domain/usecases";
import { type HttpClientInterface, HttpStatusCodeEnum } from "../protocols";

export class GetCityByNameUseCase implements GetCityByNameUseCaseInterface {
  constructor(
    private readonly httpClient: HttpClientInterface<GetCityByNameUseCaseInterface.ApiResponse>
  ) {}

  async run(
    input: GetCityByNameUseCaseInterface.Input
  ): Promise<GetCityByNameUseCaseInterface.Output> {
    const queryString = new URLSearchParams({
      appid: API_TOKEN,
      lang: 'pt',
      q: input.city
    });
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${API_URL}/weather?${queryString}`
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCodeEnum.ok: {
        return {
          lon: httpResponse.body!.coord.lon,
          lat: httpResponse.body!.coord.lat,
          country: httpResponse.body!.sys.country
        }
      }
      default:
        throw new Error('UnexpectedError');
    }
  }
}
