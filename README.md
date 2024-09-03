This is a CRUD RESTful API’s with TypeScript and Express.js 
examples of URLs
1. Get all products - http://localhost:${PORT}/products.
   
2. Filter by category - http://localhost:${PORT}/products?category=${category}
  - category "Home Appliances" - http://localhost:${PORT}/products?category=Home%20Appliances
  - category "Electronics" - http://localhost:${PORT}/products?category=Electronics
    
3. Get a product by ID - http://localhost:${PORT}/products/:id
   - http://localhost:${PORT}/products/8

