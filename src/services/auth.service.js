import apiClient from "../config/axios-config/axiosConfig";
import { ApiUrlConstants } from "../constant/appConstants";

class AuthService {
  getOTP(data) {
    return apiClient.post(ApiUrlConstants.otp, data);
  }
}

const authService = new AuthService();
export default authService;
