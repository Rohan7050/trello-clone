import axios from "axios";

class HttpService {
  setHeaders() {
    const token = '';
    const headers = {
      headers: {
        'Autherization': `Bearer ${token}`
      }
    }
    return headers;
  }

  getData(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  postData(url, body) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  updateData(url, body) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  deleteData(url, body) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const httpService = new HttpService();
export default httpService;
