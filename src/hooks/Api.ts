import type { AxiosResponse, Method } from "axios";
import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL;


export const apiRequest = async <T>(
  method: Method,
  endpoint: string,
  data?: any,
  config = {},
  retries = 5,      // retries
  delay = 1500      // delay (ms)
): Promise<AxiosResponse<T>> => {
    const url = BASE_URL + endpoint; 
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
        const response = await axios({
            method,
            url,
            data,
            ...config,
        });
        return response; // successfully return the Axios response
        } catch (error) {
        const isLastAttempt = attempt === retries;

        if (axios.isAxiosError(error)) {
            console.error(`Attempt ${attempt + 1} failed:`, error.message);
        } else {
            console.error("Unexpected error:", error);
        }

        if (isLastAttempt) throw error; // stop retrying if all attempts fail

        // wait before retrying
        await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }

  // this line should never be reached
  throw new Error("Request failed after retries");
};