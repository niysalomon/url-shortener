export type UrlResponse = UrlList[];

export interface UrlList {
  id: string;
  url: string;
  ttlInSeconds: number;
  createdDate: string;
  modifiedDate: string;
}
