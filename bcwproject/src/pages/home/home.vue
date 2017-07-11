<template>
	<div>
		<home-header :navList = "navList"></home-header>
		<tab-bar :tabbar = "tabbar"></tab-bar>
	</div>
</template>

<script>
	import tabBar from '../../components/home/tabbar'
	import homeHeader from '../../components/home/homeHeader'
	export default{
		components: {
			homeHeader, tabBar
		},
		data () {
			return {
				navList: [],
				tabbar: []
			}
		},
		created () {
			this.$http.get('../../../static/data/beCherry/nav.json').then(res=> {
				console.log(res.data.result_data.list)
				this.navList = res.data.result_data.list
			})
			// this.$http.get('../../../static/data/tabbar.json').then(res=>{
			// 	console.log(res.data.result_data.banner)
			// 	this.nav_list = res.data.result_data.banner
			// })
		}
	}
</script>

<style>
	
</style>