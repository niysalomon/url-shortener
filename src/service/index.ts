import axios, { AxiosResponse } from "axios";
import { UrlList, UrlResponse } from "../interface"; 
// const API_URL = process.env.REACT_APP_MY_URLL;
// const username = process.env.REACT_APP_MY_USERNAME;
// const password = process.env.REACT_APP_MY_PASSWORD;
const username = "abat";
const password = "5hWDEcFK4FUW";
const encodedCredentials = btoa(`${username}:${password}`);

export const fetchRecordsLis = async (): Promise<
  AxiosResponse<UrlResponse>
> => {
  // console.log("======",API_URL)
  try {
    const response = await axios.get<UrlResponse>(
      `${'https://urlshortener.smef.io'}/urls`,
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any) {
    console.error("Error fetching documents:", error.message);
    throw error;
  }
};

export const SaveNewRecord = (document: {
  url: string;
  ttlInSeconds: number;
}): Promise<AxiosResponse<UrlResponse>> => {
  return axios.post(
    "https://urlshortener.smef.io/urls",
    document, // Payload
    {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const saveUrl = (
  url: string,
  ttlInSeconds: number
): Promise<AxiosResponse<UrlList>> =>
  axios.post(
    "https://urlshortener.smef.io/urls",
    { url, ttlInSeconds },
    {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type": "application/json",
      },
    }
  );

export const updateExistingUrl = (
  id: string,
  url: string,
  ttlInSeconds: number
): Promise<AxiosResponse<UrlList>> =>
  axios.put(
    `https://urlshortener.smef.io/urls/${id}`,
    {
      url,
      ttlInSeconds,
    },
    {
      headers: {
        Authorization: `Basic ${encodedCredentials}`, // Include your credentials
        "Content-Type": "application/json", // Ensure proper content type
      },
    }
  );
export const getSingleRecord = async (
  id: string
): Promise<AxiosResponse<UrlList>> => {
  try {
    const response = await axios.get<UrlList>(
      `https://urlshortener.smef.io/urls/${id}`,
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any) {
    console.error("Error fetching documents:", error.message);
    throw error;
  }
};

export const deleteSingleRecord = async (
  id: string
): Promise<AxiosResponse<UrlList>> => {
  try {
    const response = await axios.delete<UrlList>(
      `https://urlshortener.smef.io/urls/${id}`,
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any) {
    console.error("Error deleting the record:", error.message);
    throw error;
  }
};
