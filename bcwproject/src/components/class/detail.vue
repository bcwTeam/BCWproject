<template>
	<div class="classDetailPage">
		<div class="classDetailHead"><b><</b><span>坚果炒货</span></div>
		<ul>
			<li v-for="(i,index) in navList" :class="currentIndex==index?'navItem':''" @click="change(index)">{{i.title}}</li>
		</ul>
		<div class="goodsContainer">
			<div v-for="item in classifyDataList" class="good">
				<img :src="item.goods_icon" alt="">
				<p>{{item.goods_title}}</p>
				<p>￥{{item.shop_price}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				id : '',
				classifyDataList : [],
				navList : [{title : '销量'},{title : '新品'},{title : '价格'}],
				currentIndex : 0,
			}
		},
		methods : {
			getClassifyDataDetail : function(){

				this.$http.get('../../../static/data/classify_detail/detail'+this.id+'.json').then(res=>{
					this.classifyDataList = res.data.result_data.list;
					console.log(this.classifyDataList);
				})
			},
			change : function(index){
				this.currentIndex = index;
			}
		},
		created () {
			this.id = this.$route.params.id;
			this.getClassifyDataDetail(); 
		}
	}
</script>
<style>
	/*整个详情页*/
	.classDetailPage{
		background-color: #EDEDED;
	}
	/*头部*/
	.classDetailHead{
		line-height: 1.388889rem;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		font-size: 0.5rem;
		padding: 0 9px;
	}
	.classDetailHead span{
		position: absolute;
		left: 40%;
	}
	/*导航*/
	.classDetailPage ul{
		position: fixed;
		top: 1.444444rem;
		left: 0;
		right: 0;
		background-color: #fff;
	}
	.classDetailPage ul li{
		float: left;
		line-height: 0.888889rem;
		width: 33.333%;
		text-align: center;
		font-size: 0.4rem;
		position: relative;
	}
	.navItem:after{
		content: "";
		display: inline-block;
		width: 70%;
		height: 2px;
		background-color: red;
		position: absolute;
		bottom: 0;
		left: 15%;
	}
	/*所有商品容器*/
	.goodsContainer{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 2.277778rem;
	}
	/*每个商品容器*/
	.good{
		width: 49.3%;
		background-color: pink;
		background-color: #fff;
		margin-top: 0.277778rem;
	}
	/*每个商品图片*/
	.good img{
		width: 100%;
	}

</style>