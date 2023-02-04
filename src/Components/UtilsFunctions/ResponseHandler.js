import axios from "axios";
import ToastHandler from "./ToastHandler";
import { MainApiUrl } from "../Imports/MainApiUrl";

const ApiCallHandler = async (ApiData) => {
  try {
    var config = {
      method: ApiData.method,
      url: `${MainApiUrl}${ApiData.endPoint}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ApiData.auth}`,
      },
      data: ApiData.data,
    };
    if (ApiData.lang) {
      config.headers[`Accept-Language`] = ApiData.lang;
    }
    if (ApiData.formData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    if (ApiData.source) {
      config[`cancelToken`] = ApiData.source.token;
    }
    const response = await axios(config);
    return { ...response.data, status_code: response.status };
  } catch (error) {
    if (error.response) {
      return { ...error.response.data, status_code: error.response.status };
    } else {
      return { message: "login error", status_code: 499, status: false };
    }
  }
};

export const ApiResponseHandler = async (ApiData, api, mess) => {
  try {
    const response = await ApiCallHandler(ApiData);
    let MainData = {};
    if (response.status_code === 200 || response.status_code === 201) {
      MainData = {
        data: response,
        status: true,
        res: true,
      };
      if (mess) {
        ToastHandler("sus", response.message);
      }
      return MainData;
    } else if (response.status_code === 400) {
      MainData = {
        status: false,
        res: false,
      };
      ToastHandler("warn", response.message);
      return MainData;
    } else if (response.status_code === 401) {
      ToastHandler("warn", `${response.message}`);
      return {
        status: false,
        res: false,
        out: true,
      };
    } else if (response.status_code === 499) {
      return {
        status: false,
        res: false,
      };
    } else {
      MainData = {
        status: false,
        res: false,
      };
      ToastHandler("dan", `${response.status_code} ${response.message}`);
      return MainData;
    }
  } catch (error) {
    ToastHandler("dan", `${api} API Error`);
    return {
      status: false,
      res: false,
    };
  }
};
