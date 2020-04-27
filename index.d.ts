declare module 'zenvia-api' {
  export function sendOne(
    conta: string,
    senha: string,
    body: object
  ): Promise<ISendResponse>;

  export function getStatus(
    conta: string,
    senha: string,
    id: any
  ): Promise<ISmsStatus>;

  export function list(
    conta: string,
    senha: string
  ): Promise<IReceivedResponse>;

  export function sendMultiple(
    conta: string,
    senha: string,
    body: ISendSmsMultiRequest
  ): Promise<ISendSmsMultiResponse>;
}

declare interface ISendResponseItem {
  statusCode: string;
  statusDescription: string;
  detailCode: string;
  detailDescription: string;
}

declare interface ISendResponse {
  sendSmsResponse: ISendResponseItem;
}

declare interface IReceivedMessages {
  id: number;
  dateReceived: any;
  mobile: string;
  body: string;
  shortcode: string;
  mobileOperatorName: string;
  mtId: string;
}

declare interface IReceivedResponse {
  receivedResponse: {
    statusCode: string;
    statusDescription: string;
    detailCode: string;
    detailDescription: string;
    receivedMessages: IReceivedMessages[] | null;
  };
}

declare interface ISmsStatus {
  getSmsStatusResp: {
    id: string;
    received: string | null;
    shortcode: string | null;
    mobileOperatorName: string | null;
    statusCode: string;
    statusDescription: string;
    detailCode: string;
    detailDescription: string;
  };
}

declare interface ISendSmsMultiResponse {
  sendSmsResponseList: ISendResponseItem[];
}

declare interface ISendSmsRequestList {
  from: string;
  to: string;
  schedule: string;
  msg: string;
  callbackOption: string;
  id: number;
  flashSms: boolean;
}

declare interface ISendSmsMultiRequest {
  aggregateId: number;
  sendSmsRequestList: ISendSmsRequestList[];
}
