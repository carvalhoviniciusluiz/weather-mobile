import { HttpStatusCodeEnum } from './http-status-code.enum';

export interface HttpResponseInterface<BodyData = any> {
  statusCode: HttpStatusCodeEnum | undefined;
  body?: BodyData;
};
