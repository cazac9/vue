<script>
var elasticsearch = require('elasticsearch');
  module.exports = {
    data: function(){
			return {
				keywordInput:'',
				resultUrls:[],
				searchTemplates:[
					{ url: "https://duckduckgo.com/?q={keywordInput}", imgSrc:"./images/ddg.png", name: "Duck Duck GO" },
					{ url: "https://en.wikipedia.org/wiki/Special:Search?search={keywordInput}", imgSrc:"./images/wiki.png", name:"Wikipedia" }
				]
			}
	}
  }
</script>


 <template id="oss-page">
	<v-container>
		<v-flex xs6>
			<v-text-field 
			id="oss-query" 
			label="Search query" 
			type="text" 
			v-model="keywordInput"
			name="input-1">
		</v-text-field>
		</v-flex>
		<v-flex xs6 v-show="keywordInput.length > 0">
			<label>Search for <b>{{keywordInput}}</b> with:</label>
		</v-flex>
		<v-flex xs6 v-show="keywordInput.length > 0">
			<v-list two-line>
	          <template v-for="(item, index) in searchTemplates">
	            <v-divider v-if="index!=0" :inset="item.url" :key="index"></v-divider>
	            <v-list-tile avatar :key="item.url" @click="">
	              <v-list-tile-avatar>
	                <img :src="item.imgSrc">
	              </v-list-tile-avatar>
	              <v-list-tile-content>
	                <v-list-tile-title >
						<a :href="item.url.replace('{keywordInput}', keywordInput)" :title="item.url.replace('{keywordInput}', keywordInput)" target="_blank">{{item.name}}</a>
	                </v-list-tile-title>
	              </v-list-tile-content>
	            </v-list-tile>
	          </template>
	        </v-list>
		</v-flex>
	</v-container>
 </template>