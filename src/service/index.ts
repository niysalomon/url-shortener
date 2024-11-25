import axios, { AxiosResponse } from "axios";
import {   UrlList, UrlResponse } from "../interface";
const username = 'abat';
const password = '5hWDEcFK4FUW';
const encodedCredentials = btoa(`${username}:${password}`); 
 
export const fetchRecordsLis = async (): Promise<
  AxiosResponse<UrlResponse>
> => {
  try {
    const response = await axios.get<UrlResponse>(
      'https://urlshortener.smef.io/urls',
      {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`, 
          'Content-Type': 'application/json', 
        },
      }
    );
    return response; 
  } catch (error: any) {
    console.error('Error fetching documents:', error.message);
    throw error;
  }
};

export const SaveNewRecord = (document: {   
    url: string;
    ttlInSeconds: number; 
  }): Promise<AxiosResponse<UrlResponse>> => {
    
    return axios.post(
        'https://urlshortener.smef.io/urls',
      document, // Payload
      {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`, 
          'Content-Type': 'application/json', 
        },
      }
    );
  };


  export const saveUrl = (
    url: string,
    ttlInSeconds: number
  ): Promise<AxiosResponse<UrlResponse>> =>
    axios.post(
        'https://urlshortener.smef.io/urls',
      { url, ttlInSeconds },
      {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`, 
          'Content-Type': 'application/json', 
        },
      }
    );

    
    export const getSingleRecord = async (id:string): Promise<
  AxiosResponse<UrlList>
> => {
  try {
    const response = await axios.get<UrlList>(
      `https://urlshortener.smef.io/urls/${id}`,
      {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`, 
          'Content-Type': 'application/json', 
        },
      }
    );
    return response; 
  } catch (error: any) {
    console.error('Error fetching documents:', error.message);
    throw error;
  }
};