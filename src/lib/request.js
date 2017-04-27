'use-strict';

class Request {
  constructor(resource, options) {
    this.url = resource;
    this.options = {
      headers: {
        'Content-Type': options.contentType
      }
    };

    return this;
  }

  post(data) {
    console.log("Make post");
    return this.makeRequest('POST', data);
  }

  makeRequest(method, data) {
    this.options.method = method;
    console.log("Begin", data);

    if (method != 'GET') {
      this.options.body = JSON.stringify(data);
    }



    return fetch(this.url, this.options)
      .then(response => {
        if (!response.ok) {
          console.warn("not ok");
          return Promise.reject({
            statusCode: response.status,
            body: response.json()
          });
        }

        console.warn(response);
        return response.json();
      })
      .catch(err => {
        if (err.statusCode) {
          console.log("error");
          return Promise.reject(err);
        }

        console.warn(err);
        return Promise.reject(err);

      })
  }
}

  export default function request(resource, options) {
    console.log(options);
    return new Request(resource, options || {});
  }

  export function configure(options) {
    Object.assign(config, options);
  }


