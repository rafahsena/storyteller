import axios, { AxiosInstance } from "axios";
import { API_URL } from "../../constants/urls";

const http: AxiosInstance = axios.create({ baseURL: API_URL });

export { http };
