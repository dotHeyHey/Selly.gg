const request = require('request');
const base64  = require('base-64');

class Selly {

    constructor(apiKey, apiEmail) {
        this.apiKey = apiKey;
        this.apiEmail = apiEmail;
    }

    genApiToken(apiKey, apiEmail) {
        const apiToken = `${apiEmail}:${apiKey}`;
        const encode = base64.encode(apiToken);
        return encode;
    }

    getPage(page) {
        return this.makeRequest('orders?page=', { page }, body => body.data);
    }

    getOrders() {
        return this.makeRequest('orders', { }, body => body.data);
    }

    getSpecificOrder(ID) {
        return this.makeRequest(`orders/${ID}`, { ID }, body => body.data);
    }

    getAllProducts() {
        return this.makeRequest('products', { }, body => body.data);
    }

    getSpecificProduct(ID) {
        return this.makeRequest(`products/${ID}`, { ID }, body => body.data);
    }

    getAllProductGroups() {
        return this.makeRequest('product_groups', { }, body => body.data);
    }

    getSpecificProductGroup(ID) {
        return this.makeRequest(`product_groups/${ID}`, { ID }, body => body.data);
    }

    deletePayment(ID) {
        return this.makeRequest(`pay/${ID}`, { ID }, body => body.data);
    }



    makeRequest(endpoint, params = {}, manipulator) {
        if (arguments.length === 2 && typeof(params) === 'function') {
            manipulator = params;
            params = {};
          }

        return new Promise((resolve, reject) => {
            request({
                url: `https://selly.gg/api/${endpoint}`,
                json: true,
                gzip: true,
                headers: {
                    'Authorization': `Basic ${this.genApiToken(this.apiKey, this.apiEmail)}`,
                    'User-Agent': `username - localhost`
                }
            }, (err, res, body) => {
                if (err || body.status !== 'success') {
                    reject(err || body);
                    return;
                }

                if(typeof(manipulator) === 'function') {
                    resolve(manipulator(body));
                } else {
                    resolve(body);
                }
            });
        });
    }
}

module.exports = Selly;