<template>
	<nav class="home_nav">
		<!-- <ul>
			        <li v-for="(item,index) in nav_list" @click="currentIndex = index">
			        	<router-link to="/item.salt">
			        		<img :src="currentIndex == index ? {{ item.image_url_select }} : {{ item.image_url }}" alt="">
			        	</router-link>
			        </li>
			    </ul> -->
	</nav>
</template>

<script>
	export default{
		name: 'homeNav',
		data () {
			return {
				nav_list: [],
				currentIndex: 0
			}
		},
		created () {
			//	console.log()
			this.$http.get('../../../static/data/tabbar.json').then(res=>{
				// console.log(res.data.result_data.banner)
				this.nav_list = res.data.result_data.banner
			})
		}
	}
</script>

<style>
	
</style>





