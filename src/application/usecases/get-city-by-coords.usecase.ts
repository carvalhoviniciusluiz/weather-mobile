import { API_URL, API_TOKEN } from "@env";
import { type GetCityByCoordsUseCaseInterface } from "../../domain/usecases";
import { type HttpClientInterface, HttpStatusCodeEnum } from "../protocols";

export class GetCityByCoordsUseCase implements GetCityByCoordsUseCaseInterface {
  constructor(
    private readonly httpClient: HttpClientInterface<GetCityByCoordsUseCaseInterface.ApiResponse>
  ) {}

  async run(
    input: GetCityByCoordsUseCaseInterface.Input
  ): Promise<GetCityByCoordsUseCaseInterface.Output> {
    const queryString = new URLSearchParams({
      appid: API_TOKEN,
      lang: 'pt',
      lat: String(input.lat),
      lon: String(input.lon)
    });
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${API_URL}/weather?${queryString}`
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCodeEnum.ok: {
        return {
          name: httpResponse.body!.name,
          country: httpResponse.body!.sys.country
        }
      }
      default:
        throw new Error('UnexpectedError');
    }
  }
}
