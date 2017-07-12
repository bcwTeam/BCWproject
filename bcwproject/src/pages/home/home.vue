<template>
	<div>

		<swiper :swiperPic="pic">
			
		</swiper>

    <!--会员中心，每日签到，豆味商城，包邮专区-->
		<div class="homeClass">
			<dl>
				<dt>
					<img src="../../../static/data/img/vipCenter.jpg">
				</dt>
				<dd>
					会员中心
				</dd>
			</dl>
			<dl>
				<dt>
					<img src="../../../static/data/img/everydaySign.jpg">
				</dt>
				<dd>
					每日签到
				</dd>
			</dl>
			<dl>
				<dt>
					<img src="../../../static/data/img/beanShop.jpg">
				</dt>
				<dd>
					豆味商城
				</dd>
			</dl>
			<dl>
				<dt>
					<img src="../../../static/data/img/freePost.jpg">
				</dt>
				<dd>
					包邮专区
				</dd>
			</dl>
		</div>
    <!--限时秒杀-->
		<div class="timedSeckilled">
			<img src="../../../static/data/img/timedSeckilled.jpg">
			<div>
				<img src="../../../static/data/img/foodie.jpg">
				<img src="../../../static/data/img/foodie.jpg">
			</div>
		</div>
    <!--新品首发-->
		<div class="newProduct">
			<img src="../../../static/data/img/newProduct.jpg">
			<div id="newProductBottom">
				<div>
					<dl v-for="(item,index) in newProductData">
						<dt>
							<img :src="item.image_url">
						</dt>
						<dd>
							<div>
								{{item.goods_name}}
							</div>
							<div>
								{{item.goods_describe}}
							</div>
							<div>
								<span>
									￥{{item.market_price}}
								</span>
								<span>
									￥{{item.goods_price}}
								</span>
								<span>
									<img src="../../../static/data/img/shoppingCartPict.jpg">
								</span>

							</div>
						</dd>
					</dl>
				</div>
			</div>
		</div>
    <!--会员福利-->
		<div class="vipWelfare">
			<img src="../../../static/data/img/vipWelfare.jpg">
			<div>
				<img src="../../../static/data/img/vipWelfare1.jpg" >
				<img src="../../../static/data/img/vipWelfare10.jpg" >
				<img src="../../../static/data/img/vipWelfare3.jpg" >
				<img src="../../../static/data/img/vipWelfare4.jpg" >
			</div>
		</div>
    <!--精选推荐-->
		<div class="selectionHeader">
			<img src="../../../static/data/img/selectionHeader.jpg">
		</div>
		<div v-for="(item1,index) in selectionDataBottom.data">
			<img :src="item1.image_url" class="selectionImage">
		</div>
    <!--每日优选-->
		<div class="everydaySelection">
			<img src="../../../static/data/img/everydaySelection.jpg">
			<dl v-for="(item,index) in everydaySelectionData">
				<dt>
					<img :src="item.image_url" />
				</dt>
				<dd>
					<div>
						{{item.goods_name}}
					</div>
					<div>
						{{item.goods_describe}}
					</div>
					<div>
						￥{{item.goods_price}}
					</div>
				</dd>
			</dl>
		</div>


		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import tabBar from '../../components/home/tabbar'
	import swiper from '../../components/home/swiper'
	
	export default{
		data(){
			return {
				selectionDataBottom:[],
				newProductData:[],
				everydaySelectionData:[],
				pic : []
			};
		},
		components: {
			tabBar,
			swiper,
		},
		methods : {
			getSwiperData : function(){
				this.$http.get('../../../static/data/beCherry/swiper.json').then(res => {
					// console.log(res.data.result_data.list[0].data_list);
					this.pic = res.data.result_data.list[0].data_list
				})
			},
			getSelectionData:function(){
				var $this=this;
				this.$http.get("../../../static/data/selection.json").then(function(res){
					$this.selectionDataBottom=JSON.parse(res.request.response);
					console.log(JSON.parse(res.request.response));
				})
			},
			getNewProductData:function(){
				var $this=this;
				this.$http.get("../../../static/data/newProduct.json").then(function(res){
					console.log(JSON.parse(res.request.response).result_data.list[4].data_list);
					$this.newProductData=JSON.parse(res.request.response).result_data.list[4].data_list;
				})
			},
			getEverydaySelectionData:function(){
				var $this=this;
				this.$http.get("../../../static/data/everydaySelection.json").then(function(res){
					console.log(JSON.parse(res.request.response).result_data.list);
					$this.everydaySelectionData=JSON.parse(res.request.response).result_data.list;

				})
			}
		},
		created (){
			this.getSwiperData();
			this.getSelectionData();
			this.getNewProductData();
			this.getEverydaySelectionData();
		},
	}
</script>

<style>
	.selectionHeader{
		width:100%;
	}
	.selectionHeader img{
		width:100%;
	}
	.selectionImage{
		width:100%;
	}
  /*会员中心，每日签到，豆味商城，包邮专区*/
	.homeClass{
		overflow:hidden;
		border-bottom:10px solid #EDEDED;
	}
	.homeClass dl{
		width:25%;
		float:left;
	}
	.homeClass dl dt{
		width:60%;
		margin-left:20%;
		float:left;
	}
	.homeClass dl dt img{
		width:100%;
	}
	.homeClass dl dd{
		text-align:center;
		float:left;
		margin-left:10%;
		width:80%;
		font-size:12px;
	}
  /*限时秒杀*/
	.timedSeckilled{
		width:100%;
		overflow:hidden;
		border-bottom:10px solid #ededed;
	}
	.timedSeckilled img{
		width:50%;
		float:left;
	}
	.timedSeckilled div{
		width:50%;
		float:right;
	}
	.timedSeckilled div img{
		width:100%;
	}
  /*新品首发*/
	.newProduct{
		width:100%;
	}
	.newProduct img{
		width:100%;
	}
	#newProductBottom{
		width:100%;
		overflow:hidden;
	}
	#newProductBottom div{
		width:360%;
	}
	#newProductBottom dl{
		width:25%;
		float:left;
	}
	#newProductBottom dl dt{
		width:50%;
		float:left;
	}
	#newProductBottom dl dd{
		width:50%;
		float:left;
	}
	#newProductBottom dl dd div:nth-of-type(1){
		margin-top:25px;
		font-size:20px;
		color:#555;
		font-weight:bold;
	}
	#newProductBottom dl dd div:nth-of-type(2){
		margin-top:10px;
		font-size:16px;
		color:#666;
	}
	#newProductBottom dl dd div{
		font-size:0px;
	}
	#newProductBottom dl dd div span:nth-of-type(1){
		display:inline-block;
		padding-top:20px;
		font-size:14px;
		color:#FF6347;
		font-weight:bold;
	}
	#newProductBottom dl dd div span:nth-of-type(2){
		display:inline-block;
		padding-top:20px;
		font-size:10px;
		color:#999;
	}
	#newProductBottom dl dd div span:nth-of-type(3){
		display:inline-block;
		background-color:#FF6347;
		width:5%;
		border-radius:50%;
		margin-left:10px;
	}
  /*会员福利*/
	.vipWelfare{
		width:100%;
	}
	.vipWelfare img{
		width:100%;
	}
	.vipWelfare div{
		width:100%;
	}
	.vipWelfare div img{
		width:25%;
		float:left;
	}
  /*每日优选*/
	.everydaySelection{
		width:100%;

	}
	.everydaySelection img{
		width:100%;

	}
	.everydaySelection dl{
		width:100%;
		overflow:hidden;
	}
	.everydaySelection dl dt{
		width:100%;
		float:left;
	}
	.everydaySelection dl dt img{
		width:100%;

	}
	.everydaySelection dl dd{
		width:100%;
		float:left;
	}
	.everydaySelection dl dd div:nth-of-type(1){
		text-indent:10px;
		width:100%;
		color:#444;
		font-weight:bold;
		font-size:16px;
		 overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.everydaySelection dl dd div:nth-of-type(2){
		text-indent:10px;
		width:70%;
		color:#444;
		font-size:16px;
		margin-top:10px;
		float:left;
	}
	.everydaySelection dl dd div:nth-of-type(3){
		width:20%;
		color:#FF6347;
		font-size:16px;
		margin-top:10px;
		float:right;
		font-weight:bold;
		margin-bottom:10px;
	}
</style>
