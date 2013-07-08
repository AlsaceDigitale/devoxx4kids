'use strict';

angular.module('devoxx4kidsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.images = [
      { src:'1371914534806.jpg', text:'Pour les enfants de 10 à  14 ans'},
      { src:'P1060385.jpg', text:'Venez apprendre à programmez en jouant au Lego Mindstorm ou à Scratch'},
      { src:'P1060398.jpg', text:'Dans une ambiance sympathique'},
      { src:'P1060414.jpg', text:'Accompagné par un parent'},
      { src:'P1060431.jpg', text:'C\'est gratuit'},
      { src:'P1060458.jpg', text:'Parce qu\'on apprend pas ça à l\'école'},
      { src:'P1060481.jpg', text:'Venez créer vos propres jeux'},
      { src:'P1060493.jpg', text:'A la médiathèque André Malraux'},
      { src:'P1060525.jpg', text:'Plus d\'infos dans la page contacts pour être tenu informé des prochains évènements'},
      { src:'P1060528.jpg', text:'Organisé par l\'association Alsace Digitale'}
    ];

    $scope.itemClass = function (i) {
      if (i === 0) {
        return 'active item';
      } else {
        return 'item';
      }

    };
  });
