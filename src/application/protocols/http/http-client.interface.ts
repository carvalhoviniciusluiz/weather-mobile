import { HttpRequestInterface } from './http-request.interface';
import { HttpResponseInterface } from './http-response.interface';

export interface HttpClientInterface<Response = any> {
  request: (params: HttpRequestInterface) => Promise<HttpResponseInterface<Response>>;
}
