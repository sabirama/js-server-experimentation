const index = `
let products;
const display = document.getElementById("display");

document.querySelector(".get-products").addEventListener("click", async () => {
   try {
       const response = await fetch("/api/products");
       
       if (!response.ok) {
           throw new Error('Network response was not ok');
       }

       const data = await response.json();
       console.log(data);
      display.innerHTML = data.map(item => {
         return "<div> <h3>" + item.name + "</h3>" 
         + "<p>"+ item.details +"</p>" 
         + "<p>"+ item.price + "</p> </div>" 
      }).join("");
       return  products = data;
   } catch (error) {
       console.error('Error fetching data:', error);
   }
});
`;

export default index;
