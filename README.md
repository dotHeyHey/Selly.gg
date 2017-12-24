# Selly.gg
Wrapper for the Selly.gg API

```js
const Selly = require('Selly');

const API = new Selly.API(apiKey, sellyEmail)
```

# Installation
```cd
npm install selly
```

# API
To make Selly.gg API calls you need to initate the Selly.API class by passing it your Selly.gg API Key and Selly.gg Email.

All calls return a promise with the data from the response. If there is an error making the request or the status of the request from Selly is not "success" the promise will be rejected.
