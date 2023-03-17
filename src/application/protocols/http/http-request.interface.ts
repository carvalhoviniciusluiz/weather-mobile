export type HttpMethodProps = 'post' | 'get' | 'put' | 'patch' | 'delete';

export interface HttpRequestInterface<Body = any, Headers = any> {
  url: string;
  method: HttpMethodProps;
  body?: Body;
  headers?: Headers;
};
