import { ApiUrlConstants } from "../constant/appConstants";
import httpService from "./http.service";
class AuthService {
  http = httpService;
  getOTP(data) {
    // return api
    return new Promise((resolve, reject) => {
      this.http
        .postData(ApiUrlConstants.otp, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const authService = new AuthService();
export default authService;
