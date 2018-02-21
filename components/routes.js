var VueRouter = require('vue-router');

var SearchForm = require('./searchForm.vue');
var WelcomePage = require('./welcomePage.vue');
var OssPage = require('./oss.vue');

var routes=[
  {
    path: '/apl',
    component: SearchForm
  },
  {
    path: '/home',
    component: WelcomePage
  },
   {
    path: '/oss',
    component: OssPage
  },
  { 
  	path: '/',
  	 redirect: '/home'
  },
];

module.exports = new VueRouter({routes});