import apiRoutes from "../routes/apiRoutes.js";
import viewRoutes from "../routes/viewRoutes.js";
import errorPage from "../views/components/errorPage.js";
import { request } from "./urlParameters.js";

const routing = async (req, res) => {
  const parameters = request(req).parameters;
  function response(routes, params) {
    const currPage = routes.find((item) => item.path === request(req).path);

    if (params) {
      //search database for data based on url parameters
      res.setHeader("Content-Type", currPage.contentType);
      res.writeHead(200);
      res.write(JSON.stringify(currPage.body, null, 2));
      res.body = JSON.stringify(currPage.body, null, 2)
      res.end();
    } else if (currPage) {
      res.setHeader("Content-Type", currPage.contentType);
      res.writeHead(200);
      res.write(
        currPage.contentType === "application/json"
          ? JSON.stringify(currPage.body, null, 2)
          : currPage.body
      );
      res.end();
    } else {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(404);
      res.write(errorPage);
      res.end();
    }
  }

  if (req.url.startsWith("/api")) {
    req.url = req.url.replace(/^\/api/, "");
    response(apiRoutes, parameters);
  } 
  else {
    response(viewRoutes);
  }
};

export default routing;
