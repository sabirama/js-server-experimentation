import products from "../api/products.js";

const apiRoutes = [
  {
    path: "/products",
    methods: ["GET", "POST","PUT","DELETE"],
    contentType: "application/json",
    body: products()
  }
]

export default apiRoutes;
