/**
 * The function exports a helper object with methods for making HTTP requests using fetch API with
 * options for GET, POST, PUT, and DELETE methods.
 * @returns An object with four methods: `get`, `post`, `put`, and `del`. Each method makes a custom
 * fetch request with the specified HTTP method and options.
 */
export const helpHttp = () => {
  /**
   * The function is a custom implementation of the fetch API with default headers, timeout, and error
   * handling.
   * @param endpoint - The URL or endpoint of the API that you want to fetch data from.
   * @param options - The `options` parameter is an object that contains various options for the
   * `fetch` request, such as the HTTP method, headers, and request body. It can also include a
   * `signal` property, which is used to abort the request if it takes too long to complete.
   * @returns The `customFetch` function returns a Promise that resolves to the parsed JSON response if
   * the response is successful (status code between 200 and 299), or rejects with an object containing
   * error information if the response is not successful. The error object contains a boolean `err`
   * property set to `true`, the HTTP status code as a string `status` property, and the status text as
   * a string
   */
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Something went wrong",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
