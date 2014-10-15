'use strict';

/* 
 * 
 */

var meWapService = angular.module('meWapService', []);

// Representing the remote RESTful ProductCatalogue
meWapService.factory('meWapProxy', ['$http',
    function ($http) {

        //TODO
        var url = 'http://localhost:8080/meWap/webresources/meWaps';
        return {
            findAll: function () {
                return $http.get(url);
            },
            findRange: function (first, count) {
                return $http.get(url + "/range?first=" + first + "&count=" + count);
            },
            find: function (id) {
                return $http.get(url + "/" + id);
            },
            update: function (id, event) {
                return $http.put(url + "/" + id, event);
            },
            create: function (event) {
                return $http.post(url, event);
            },
            delete: function (id) {
                return $http.delete(url + "/" + id);
            },
            count: function () {
                return $http.get(url + "/count");
            }
        };

    }]);
