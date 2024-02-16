export const request = (req) => {
  const stringUrl = req.url.includes("%20")
    ? req.url.replace(/%20/g, " ")
    : req.url; 
    
  if (stringUrl.includes("?")) {
    //takes request data to create parameters for api
    let params = {};
    const queryString = stringUrl.split("?")[1];
    let pairs = queryString.split("&");

    for (let pair of pairs) {
      let [key, value] = pair.split("=");
      params[key] = value;
    }
    return {
      path: req.url.split("?")[0],
      parameters: params,
      body: req.body,
      headers: req.headers, 
    };
  } else {
    //if no parameters are in the URL, returns as is.
    return {
      path: stringUrl,
      headers: req.headers,
      body: req.body,
    };
  }
};

export default [request];
