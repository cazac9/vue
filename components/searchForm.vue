<script>
var elasticsearch = require('elasticsearch');
  module.exports = {
    data: function(){
			return {
				query:'',
				selectedValue: '',
				searchResult:[], 
			}
	},
	methods: {
			sendRequest: function(){
				var scope = this;
				var client = elasticsearch.Client({
					hosts: [{
						host: '9e86ee8ee1c91ad78925e4e2f7b71711.us-east-1.aws.found.io',
						protocol:'https',
						port:9243,
						auth:'elastic:LndI6V6KKPvs5vqam9ACDBdm'				
					}]
				});
				
				client.search({ 
						q: this.query 
				})
				.then(function (body) { 
					scope.searchResult = [];
					for(var i=0; i < body.hits.hits.length; i++){
							scope.searchResult.push( body.hits.hits[i]._source.title);
						}
					if(scope.searchResult.length > 0){
						scope.selectedValue = scope.searchResult[0];
					}
				},  
				function (error) { 
					console.trace(error.message); 
				}); 
			}
		}
  }
</script>

<template id="search-form">
	<v-container>
		<v-flex xs6>
			<v-text-field 
			id="query" 
			label="Search query" 
			type="text" 
			v-model="query"
			name="input-1"
			@keyup.enter="sendRequest"></v-text-field>
		</v-flex>
		<v-flex xs6 v-show="searchResult.length > 0">
			<v-list two-line>
				<template v-for="(item, index) in searchResult">
					<v-subheader v-if="index==0" >Search results</v-subheader>
					<v-divider v-else-if="index != 0" :key="index"></v-divider>
					<v-list-tile avatar :key="item" @click="">
						<v-list-tile-content>
							<v-list-tile-title v-html="item"></v-list-tile-title>
					   </v-list-tile-content>
				   </v-list-tile>
			  </template>
		   </v-list>
		</v-flex>
	</v-container>
</template>
