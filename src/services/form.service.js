import httpService from "./http.service";

class FormServices {
  http = httpService;
  submitForm(url, data) {
    console.log("FormServices submit page data", url, data);
    return new Promise((resolve, reject) => {
      this.http.postData(url, data).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  }

  formHasError(error) {
    console.log("FormServices error", error);
  }

  patchInitialValues() {}
}

const formServices = new FormServices();
export default formServices;
