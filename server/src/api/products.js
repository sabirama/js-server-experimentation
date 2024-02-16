const products = (urlParameters) => {
  const data = [
    {
      name: "Samsung Galaxy 14",
      details: "latest samsung phone",
      price: "20000Php",
    },
    {
      name: "Iphone 15 pro max",
      details: "latest apple phone",
      price: "20000Php",
    },
  ];

  if (urlParameters) {
    return data.find(
      (name) => name === urlParameters.name,
      (details) => details === urlParameters.details,
      (price) => price === urlParameters.price
    );
  } else {
    return data;
  }
};
export default products;
