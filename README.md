# Selly.gg
Wrapper for the Selly.gg API

```js
const Selly = require('Selly.gg');

const API = new Selly.API(apiKey, sellyEmail)
```

# Installation
```javascript
$ npm install selly.gg
```

# API
To make Selly.gg API calls you need to initate the Selly.API class by passing it your Selly.gg API Key and Selly.gg Email.

All calls return a promise with the data from the response. If there is an error making the request or the status of the request from Selly is not "success" the promise will be rejected.

### getPage(page)
Selly offers the ability to paginate any list or index resource. The page header returns the total number of pages for the resources at the specific endpoint you're using.

### getOrders()
Retrieves all orders.

### getSpecificOrder(ID)
Retrieves a specific order.

### getAllProducts()
Retrieves all products.

### getSpecificProduct(ID)
Retrieves a specific product.

### getAllProductGroups()
Retrieves all product groups.

### getSpecificProductGroup(ID)
Retrieves a specific product group.

### deletePayment(ID)
This deletes a Selly Pay payment
