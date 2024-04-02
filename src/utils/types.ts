export type IResponse = {
  data: any;
  statusCode: number;
  message?: string;
  [key: string]: any;
};
