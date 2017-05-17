
var TimelineModule = angular.module('timelineMain', ['ngRoute']);
TimelineModule.controller("timelineVModel", function ($scope, timelineService) {
    
    $scope.patients = [];
    $scope.timelines = [];

    getPatients();

    //alert("hello1");
    getTimelines();

    function getPatients() {
        
        timelineService.getPatients().then(function (D) {
            //alert("hello");

           // alert(D.data[0]);
            $scope.patients = D.data;
        }, function (error) {
            alert("something wrong: " + error);

        });
    }

    function getTimelines() {
        timelineService.getTimelines().then(function (D) {
            $scope.timelines = D.data;
        }, function (error) {
            alert("Error" + error);
        });
    }
});

TimelineModule.factory('timelineService', function ($http, $q) {
    var svc = {};
    var baseUri = "http://localhost:27906";
   
    svc.getPatients = function () {
        //alert(baseUri + "/api/Patients");
        return $http.get(baseUri +"/api/Patients");
    }

    svc.getTimelines = function () {
        return $http.get(baseUri + "/api/Timelines")
    }
    return svc;
});