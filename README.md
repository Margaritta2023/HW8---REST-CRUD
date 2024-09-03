This is a CRUD RESTful API’s with TypeScript and Express.js 
examples of URLs
1. Get all products - http://localhost:${PORT}/products. [GET]
   
2. Filter by category - http://localhost:${PORT}/products?category=${category} [GET]
  - category "Home Appliances" - http://localhost:${PORT}/products?category=Home%20Appliances
  - category "Electronics" - http://localhost:${PORT}/products?category=Electronics
    
3. Get a product by ID - http://localhost:${PORT}/products/:id [GET]
   - http://localhost:${PORT}/products/8
  
4.Create a new product - http://localhost:${PORT}/products [POST] 
  - insert into body JSON formatted object, choose raw {
     
      "name": "NEWSmartphone",
      "description": "Latest generation smartphone with 5G connectivity",
      "price": 999.99,
      "category": "Electronics",
      "stock": {
        "available": 50,
        "reserved": 5,
        "location": "Warehouse C"
      },
      "tags": [
        "smartphone",
        "mobile",
        "5G",
        "electronics"
      ],
      "rating": 4.7,
      "deleted": true
    }

5. Update a product by ID -  http://localhost:${PORT}/products/:id [PUT]
  -  http://localhost:${PORT}/products/8 {
     
      "name": "OLD SMARTPHONE",
      "description": "Latest generation smartphone with 5G connectivity",
      "price": 999.99,
      "category": "Electronics",
      "stock": {
        "available": 50,
        "reserved": 5,
        "location": "Warehouse C"
      },
      "tags": [
        "smartphone",
        "mobile",
        "5G",
        "electronics"
      ],
      "rating": 4.7,
      "deleted": true
    }

