import angular from 'angular';
import '../../node_modules/bs4-selectbox/src/bs4-selectbox.directive.js';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.movies = [
        {
            id: 1,
            title: 'The Matrix',
            year: 1999,
            length: 136,
            genre: 'sci-fi'
        },
        {
            id: 2,
            title: 'The Green Mile',
            year: 1999,
            length: 189,
            genre: 'drama'
        },
        {
            id: 3,
            title: 'Mona Lisa Smile',
            year: 2003,
            length: 117,
            genre: 'drama'
        },
        {
            id: 4,
            title: '500 Days of Summer',
            year: 2009,
            length: 189,
            genre: 'comedy'
        },
        {
            id: 5,
            title: 'One Day',
            year: 2011,
            length:  95,
            genre: 'romance'
        },
    ];

    this.selected1 = [];
    this.selected2 = [];
    this.selected3 = [];
    this.selected4 = [this.movies[2], this.movies[4]];
    this.selected5 = [
        {
            id: 4,
            title: '500 Days of Summer',
        },
        {
            id: 5,
            title: 'One Day',
        },
    ];

    this.longTestData = [];
    for (let i = 0; i < 1000; i++) {
        this.longTestData.push({
            title: 'Film ' + i,
            year: 2003,
            genre: { 0: 'action', 1: 'drama', 2: 'romance' }[i % 3]
        })
    }

    this.selected6 = [];
  }

  $onInit() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['bs4-selectbox'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
