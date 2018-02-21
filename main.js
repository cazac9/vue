var Vue = require('vue');
var Vuetify = require('vuetify');
var NavigationWidget = require('./components/navigationWidget.vue');
var router = require('./components/routes.js');
var VueRouter = require('vue-router');

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({ 
	el: '#app',
	router,
	components:{
		'navigation-widget': NavigationWidget
	}
});



  