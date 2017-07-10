<template>
	<div>
		<ul class="nav">
			<li v-for="item in list" @click="changeContent(item.type)">
				<img :src="item.image_logo" alt="">
				<p>{{item.title}}</p>
			</li>
		</ul>
		<div class="daily">
			<div v-for="i in daily">
			<!-- <div v-for="i in daily" @click="goto(i.eat_id)"> -->
				<router-link :to="{name:'Detail',params:{id:i.eat_id}}">
					<h3>{{i.title}}</h3>
					<img :src="i.imageUrl" alt="">
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				list : [],
				daily : [],
			}
		},
		methods : {
			// 获取导航栏的数据
			getData : function(){
				this.$http.get('../../../static/eatPageData/head_nav.json').then(res => {
					this.list = res.data.result_data.list;
				})
			},

			// 获取日常数据（默认展示）
			getEveryData : function(){
				this.$http.get('../../../static/eatPageData/data1.json').then(res=>{
					this.daily = res.data.result_data.list;
				})
			},

			// 点击导航切换下面对应数据
			changeContent : function(type){
				this.$http.get('../../../static/eatPageData/data'+type+'.json').then(res=>{
					this.daily = res.data.result_data.list;
				})
			},

			goto : function(id){
				this.$router.push({name : 'Detail',params:{id : id}})
			}

		},
		created : function (){
			this.getData();
			this.getEveryData();
		}
	}
</script>
<style>
	.nav{
		height: 3.333333rem;
		position: fixed;
		top: 2.777778rem;
		left: 0;
		right: 0;
		background-color: #F4F7FB;
		z-index: 23;
	}
	.nav li{
		width: 33.333%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.nav li img{
		width: 1.2rem;
		margin-top: 0.338889rem;
	}
	.nav li p{
		font-size: 0.666667rem;
		line-height: 1.388889rem;
	}
	.nav li:hover{
		background-color: #DCECFF;
	}
	.daily{
		margin-top: 6.4rem;
		margin-bottom: 3.9rem;
		background-color: #EDEDED;
	}
	.daily>div{
		margin-bottom: 10px;
		background-color: #fff;
	}
	.daily img{
		width: 100%;
		display: block;
	}
</style>