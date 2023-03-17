import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HttpClientInterface, HttpRequestInterface, HttpResponseInterface } from '../../../application/protocols';

export class AxiosHttpClient implements HttpClientInterface {
  constructor(private readonly axiosInstante: AxiosInstance) {}

  async request(params: HttpRequestInterface): Promise<HttpResponseInterface> {
    const { method, url, body: data, headers } = params;
    let axiosResponse: AxiosResponse | undefined;
    try {
      axiosResponse = await this.axiosInstante.request({
        url,
        data,
        headers,
        method
      });
    } catch (error) {
      axiosResponse = (error as AxiosError)?.response;
    }
    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data
    };
  }
}
