<script>
  module.exports = {
	data: function(){
		return {
			siteRoutes:[
				{ path : "/home", title:"Home" },
				{ path : "/apl", title:"Application" },
				{ path : "/oss", title:"Oss" }
			]
		}
	}, 
	methods:{
		menuItemClicked: function(event){
			for (var i = 0; i < event.target.childNodes.length; i++) {
				if (typeof event.target.childNodes[i].classList == 'undefined')
					continue;
			    if (event.target.childNodes[i].classList.contains("navigation-link")) {
			      event.target.childNodes[i].click();
			      break;
			    }        
			}
		}
	}
  };
</script>


<template id="navigation-widget">
	<v-navigation-drawer app permanent>
		<v-toolbar flat>
		  <v-list>
			<v-list-tile>
			  <v-list-tile-title class="title">
				Application
			  </v-list-tile-title>
			</v-list-tile>
		  </v-list>
		</v-toolbar>
		<v-divider></v-divider>
		<v-list dense class="pt-0">
		  <v-list-tile v-for="route in siteRoutes" :key="route.title"  v-on:click="menuItemClicked">
			<v-list-tile-content>
			    <router-link class="navigation-link grey--text text--darken-3"  v-bind:to="route.path">{{route.title}}</router-link>
			</v-list-tile-content>
		  </v-list-tile>
		</v-list>
	  </v-navigation-drawer>
</template>