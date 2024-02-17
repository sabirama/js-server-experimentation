import home from "../views/home.js";
import about from "../views/about.js";
import contact from "../views/contact.js";
import style from "../style/style.js";
import index from "../views/components/index.js";

const viewRoutes = [
    {
      name: "home",
      body: home,
      path: "/",
      contentType: "text/html",
    },
    {
      name: "about",
      body: about,
      path: "/about",
      contentType: "text/html",
    },
    {
      name: "contact",
      body: contact,
      path: "/contact",
      contentType: "text/html",
    },
    {
      name: "style",
      body: style,
      path: "/style",
      contentType: "text/css",
    },
    {
      name: "scripts",
      body: index,
      path: "/script",
      contentType: "text/javascript",
    }
  ];

  export default viewRoutes;