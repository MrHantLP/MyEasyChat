/**
 * Created by MrHant on 13.10.2015.
 */

angular.module('message', ['ui.router'])

    .config(['$stateProvider', function config($stateProvider) {
        $stateProvider
            .state('message', {
            url: '/chat',
            views: {
                "content": {
                    controller: 'MessagesCtrl',
                    templateUrl: 'message/view.tpl.html' //'constructor/objectonto'//
                }
            }
        })

    }])
    .controller('MessagesCtrl', function () {/*
        var lodash = _;
        $scope.messages = messages;
        $scope.itemsPerPage = MessageManager.itemsPerPage;
        console.log(messages);
        $scope.createMessage = function (newMessage) {
            MessageManager.create(newMessage).then(function (model) {
                console.log(model);
                $scope.newMessage = {};
            });
        };
        $scope.destroyMessage = function (message) {
            // check here if this message belongs to the currentUser
            MessageManager.delete(message).then(function (model) {
                // message has been deleted, and removed from $scope.messages
                lodash.remove($scope.messages, {id: message.id});
            });
        };
        //-->pagination
        $scope.currentPage = messages.length - 1;
        $scope.maxSize = 10;
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            console.log('Page changed to: ' + $scope.currentPage);
        };


        //<--pagination*/
    });