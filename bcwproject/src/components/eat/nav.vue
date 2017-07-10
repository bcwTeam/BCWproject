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
				<!-- </div> -->
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
				// this.$http.get('../../../static/eatPageData/head_nav.json').then(res => {
				// 	this.list = res.data.result_data.list;
				// })
     // https://api3.vipbcw.com/eatit/index?pathinfo=https%3A%2F%2Fm.vipbcw.com%2Fsubstance%2Findex
				this.$http.get({
					url : 'http://127.0.0.1:9999',
					params : {
						hostname : 'api3.vipbcw.com',
						path : '/eatit/index?',
						pathinfo : 'https%3A%2F%2Fm.vipbcw.com%2Fsubstance%2Findex'
					},
					method : 'get',
				}).then(res=>{
					console.log(res);
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
		height: 1.388889rem;
		position: fixed;
		top: 1.388889rem;
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
		width: 0.555556rem;
	}
	.nav li p{
		line-height: 0.555556rem;
		font-size: 0.444444rem;
	}
	.nav li:hover{
		background-color: #DCECFF;
	}
	.daily{
		margin-top: 2.777778rem;
		margin-bottom: 3.9rem;
		background-color: #EDEDED;
		/*font-size: 0.5rem;*/
	}
	.daily>div{
		margin-bottom: 10px;
		background-color: #fff;
		padding: 10px;
	}
	.daily>div a{
		color: black;
		text-decoration: none;
	}
	.daily>div h3{
		text-indent: -4px;
		margin: 10px 0;
	}
	.daily img{
		width: 100%;
		display: block;
	}
</style>