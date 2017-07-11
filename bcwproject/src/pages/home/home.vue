<template>
	<div>
		<h1>Home</h1>
		<swiper :swiperPic="pic">
			
		</swiper>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import tabBar from '../../components/home/tabbar'
	import swiper from '../../components/home/swiper'
	
	export default{
		components: {
			tabBar,
			swiper,
		},
		data () {
			return {
				pic : []
			}
		},
		methods : {
			getSwiperData : function(){
				this.$http.get('../../../static/data/beCherry/swiper.json').then(res => {
					console.log(res.data.result_data.list[0].data_list);
					this.pic = res.data.result_data.list[0].data_list
				})
			}
		},
		created : function(){
			this.getSwiperData()
		},
	}
</script>

<style>
	
</style>