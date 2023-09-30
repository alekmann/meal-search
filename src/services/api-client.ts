import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  results: T[];
}

export const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "c07a27262e404fff87ee43dcb6151dcd",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (recipeId: number) => {
    return axiosInstance
      .get<T>(`/recipes/${recipeId}${this.endpoint}`)
      .then((res) => res.data);
  };
}

export default APIClient;
