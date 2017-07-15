<template>
	<nav class="home_nav">
		<ul class="tabbar">
			<li v-for="(item,index) in nav_list" @click="currentIndex = index">
				<span @click="changePage(item.path)">
					<img :src="currentIndex == index ? item.image_url_select : item.image_url" alt="">
					<span :style="currentIndex == index ? {'color': '#FF4F39'} : {'color': '#9DA1A3'}">{{ item.nav_name }}</span>
				</span>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name: 'homeNav',
		//props: ['tabbar'],
		data () {
			return {
				nav_list: [],
				currentIndex: 0
			}
		},
		created () {
			this.$http.get('../../../static/data/tabbar.json').then(res=>{
				// console.log(res.data.result_data.banner)
				this.nav_list = res.data.result_data.banner
			})
		},
		methods: {
			changePage (data) {
				//console.log(data)
				this.$router.replace({
					path:data
				})
			}
		}
	}
</script>

<style>
	.home_nav .tabbar{
		list-style: none;
		display: flex;
		align-items: center;
		position: fixed;
		line-height: 0.5rem;
		background-color: #fff;
		bottom:0;
		left:0;
		right:0;
		z-index: 34;
	}
	.home_nav .tabbar>li{
		width:25%;
		text-align: center;
	}
	.home_nav .tabbar>li img{
		width: 0.65rem;
	}
	.home_nav .tabbar>li span{
		display: block;
	}
</style>





