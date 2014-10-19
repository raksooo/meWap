'use strict';

/* 
 * @author Josefin Ondrus
 */

var eventListService = angular.module('EventListService', []);

// Representing the remote RESTful EventList
eventListService.factory('EventListProxy', ['$http',
    function ($http) {

        //TODO
        var url = 'http://localhost:8080/meWap/webresources/events';
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
            },
            view: function (id) {
                return $http.get(url + "/" + id);
            }
        };

    }]);

