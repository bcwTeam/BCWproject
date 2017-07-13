<template>
	<div class="classDetailPage">
		<div class="classDetailHead"><b @click="back">&lt</b><span>{{titleHead}}</span></div>
		<ul>
			<li v-for="(i,index) in navList" :class="currentIndex==index?'navItem':''" @click="change(index)">{{i.title}}</li>
		</ul>
		<div class="goodsContainer">
			<router-link :to="{name:'cart'}">
				<div class="gotoCart"></div>
			</router-link>
			<div v-for="item in classifyDataList" class="good">
				<img :src="item.goods_icon" alt="">
				<div class="goodDesContainer">
					<p class="goodDes">{{item.goods_title}}</p>
					<p class="goodPrice">￥{{item.shop_price}}</p>
					<div @click="addGood(item)">
						<img src="../../../static/images/icon_cart3_white.png" height="72" width="72" alt="">
					</div>
				</div>
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
				titleHead : '',
			}
		},
		methods : {
			// 获取数据
			getClassifyDataDetail : function(){
				this.$http.get('../../../static/data/classify_detail/detail'+this.id+'.json').then(res=>{
					this.classifyDataList = res.data.result_data.list;
				})
			},
			// 导航tab切换
			change : function(index){
				this.currentIndex = index;
			},
			// 返回按钮
			back : function(){
				history.back();
			},
			// 添加商品
			addGood :function(item){
				console.log(item);
				this.$store.dispatch('addGoods',item);

			},
		},
		created () {
			this.id = this.$route.params.id;
			this.titleHead = this.$route.params.title;
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
		z-index: 34;
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
		z-index: 23;
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
	/*商品信息容器*/
	.goodDesContainer{
		height: 2.2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	.goodDesContainer>p{
		font-size: 0.388889rem;
		text-indent: 0.138889rem;
		line-height: 0.555556rem;
	}
	/*商品价格*/
	.goodPrice{
		color: #FF4E53;
		margin-bottom: 0.277778rem;
	}
	/*添加购物车图标*/
	.goodDesContainer>div{
		width: 1.25rem;
		height: 0.694444rem;
		border-radius: 0.416667rem;
		background-color: #FF4F39;
		position: absolute;
		right: 0.277778rem;
		bottom: 0.277778rem;
	}
	.goodDesContainer>div>img{
		width: .6rem;
		height: .6rem;
		position: absolute;
		left: 20%;
		top: 0.083333rem;
	}

	/*点击跳转到购物车页面*/
	.gotoCart{
		width: 1.666667rem;
		height: 1.666667rem;
		position: fixed;
		bottom: 10px;
		right: 15px;
		border: 1px solid #E3E3E3;
		border-radius: 50%;
		background-color: #fff;
		z-index: 34;
	}
</style>