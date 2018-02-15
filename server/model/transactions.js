'use strict';

const _         = require('lodash'),
    request   = require('request'),
    urls = require('../apiConfig');

module.exports = function() {

    return {

        getAllTransactionsForUser: function(data) {

            return new Promise((resolve, reject) => {
                const payload = {
                    'url'       :   urls.baseUrl + data.user,
                    'method'    :   'GET',
                    'data'      :   data
                };
                console.log(payload);
                makeRequest(payload).then((response) => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            });
        },

        addUserTransaction: function(data) {
            return new Promise((resolve, reject) => {
                const payload = {
                    'url'       :   urls.baseUrl +  data.user ,
                    'method'    :   'POST',
                    'data'      :   data
                };

                makeRequest(payload).then((response) => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            });
        },

        getUserTransactionById: function(data) {
            return new Promise((resolve, reject) => {

                const payload = {
                    'url'       :   urls.baseUrl +  data.user + '/'+ data.txnId ,
                    'method'    :   'GET',
                    'data'      :   data
                };
                makeRequest(payload).then((response) => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },

        updateTransaction: function(data) {
            return new Promise((resolve, reject) => {
                const payload = {
                    'url'       :   urls.baseUrl +  data.user + '/'+ data.id ,
                    'method'    :   'POST',
                    'data'      :   data
                };
                makeRequest(payload).then((response) => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },

        deleteTransaction: function(data) {
            return new Promise((resolve, reject) => {
                const payload = {
                    'url'       :   urls.baseUrl +  data.user + '/'+ data.id ,
                    'method'    :   'DELETE',
                    'data'      :   data
                };
                makeRequest(payload).then((response) => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },
    };
}

var makeRequest = function(options) {

    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json'
        };
        const requestParams = {
            url: options.url || '/',
            headers : headers,
            method: options.method,
            body: options.data ? JSON.stringify(Object.assign({}, options.data, {json: true})) : ''
        };
        request(requestParams, (error, response, body) => {
            if(!error) {
                resolve({
                    data: JSON.parse(body),
                    message: requestParams,
                    status : response.statusCode
                })
            } else {
                reject({
                    data: error,
                    message: requestParams,
                    status : response.statusCode
                })
            }
        });
    });
}