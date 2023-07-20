import { axiosInstance } from "../axios";
import { ILoginRequest } from "./types";

export const loginRequest = (params: ILoginRequest) => {
    return axiosInstance.post(url, params);
}