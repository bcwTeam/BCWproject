<template>
	<div>
		<!-- 没有商品时显示页面 -->
		<cart-blank v-show="cartList.length===0"></cart-blank>
		<tab-bar></tab-bar>

		<!-- 有商品时显示的页面 -->
		<div v-show="cartList.length>0">

			<!-- 头部 -->
			<div class="hasGoodHead">
				<span>购物车</span>
				<img src="../../../static/images/delete.png" height="200" width="200" alt="">
			</div>

			<!-- 还差多少包邮 -->
			<div class="baoyou" v-show="totailPrice>68">
				<img src="../../../static/images/baoyou.png" height="66" width="135" alt="">
				<span>您已享68元包邮</span>
			</div>

			<!-- 不包邮再去逛逛 -->
			<div class="goshopping" v-show="totailPrice<68">
				<p class="shoppingP1">
					<img src="../../../static/images/shopping.png" height="66" width="165" alt="">
					<span>您还差<span>{{lessMoney}}</span>元可享受"满68元包邮"</span>
				</p>
				<p class="shoppingP2" @click="goToShopping">继续挑选&gt</p>
			</div>

			<!-- 每件商品 -->
			<div class="allGoodsContainer">
				<div v-for="(item,index) in cartList" class="everGood">
					<input type="checkbox" v-model="item.choseEvery1" @click="choseEvery(item)" >
					<img :src="item.goods_icon" alt="" class="goodImg">
					<p style="float:right">{{item.shop_price}}</p>
					<!-- <p>{{item.goods_title}}</p> -->
					<span @click="delNum(item)">-</span>
					<span>{{item.num}}</span>
					<span @click="addNum(item)">+</span>
				</div>
			</div>
			<div class="jiesuan">
				<input type="checkbox" @click="choseAll" v-model="chosed">结算{{totailPrice}}
			</div>
		</div>
		
	</div>
</template>
<script>
	import tabBar from '../../components/home/tabbar'
	import cartBlank from '../../components/cart/cartBlank'
	export default {
		data () {
			return {
				totailPrice : 0,
				chosed : true,
			}
		},
		components : {
			tabBar,
			cartBlank,
		},
		computed : {
			cartList : function(){
				return this.$store.getters.getGoodsList;
			},
			lessMoney : function(){
				return (68-this.totailPrice).toFixed(2);
			}
		},
		methods : {
			// 全选按钮
			choseAll:function(){
	            var list = this.$store.getters.getGoodsList;
	            // this.chosed = !this.chosed;
	            if(this.chosed){
	                list.forEach(c=>{
	                    c.choseEvery1 = true;
	                });
	            }else{
	                list.forEach(c=>{
	                    c.choseEvery1 = false;
	                });
	            }
	            this.allPrice();
	        },


			// 取消单选框选中
			choseEvery:function(item){

	           //把所有的商品取出来
	           var list = this.$store.getters.getGoodsList;
	           //临时数组 存放选中的item
	           var arrFlag = [];

	           list.forEach(c=>{
	           		if (c.choseEvery1) {
	           			arrFlag.push(c);
	           		}
	           })

	           //选中item的数组 和 总数据的长度是否相等  让全选按钮和单选按钮状态统一
	           this.arrChosedGood = arrFlag;
	           if (list.length == arrFlag.length) {
	           		this.chosed = true;
	           } else {
	           		this.chosed = false;
	           }
	           this.allPrice();
	           
	        },


			// 计算选中的总价钱 
			 allPrice:function(){
			 	var arrFlag = [];
			 	this.$store.getters.getGoodsList.forEach(c=>{
	           		if (c.choseEvery1) {
	           			arrFlag.push(c);
	           		}
	           });
			   this.totailPrice = 0;
			   var list = arrFlag;
			   list.forEach(c=>{
			   		this.totailPrice += c.shop_price * c.num;
			   })
			   this.totailPrice = this.totailPrice.toFixed(2);
	        },


	        // 添加商品数量按钮
	        addNum : function(item){
	        	item.num++;
	        	this.allPrice();
	        },

	        // 减少商品数量按钮
	        delNum : function(item){
	        	if(item.num<2){
	        		this.$store.getters.getGoodsList.splice(this.$store.getters.getGoodsList.indexOf(item),1);
	        	}else{
	        		item.num --;
	        	}
	        	this.allPrice();
	        },


	        goToShopping : function(){
	        	this.$router.push({name:'class'})
	        }

		},

		// 刚加载出购物车页面展示内容
		created : function(){
			this.$store.getters.getGoodsList.forEach(c=>{
				c.choseEvery1 = true;
			})
	        this.allPrice();
		}
	}
</script>
<style>
	/*有商品时头部*/
	.hasGoodHead{
		height: 1.388889rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 45;
	}
	.hasGoodHead>span{
		font-size: 0.444444rem;
		position: absolute;
		top: 30%;
		left: 43%;
	}
	/*头部删除图标*/
	.hasGoodHead>img{
		width: 0.472222rem;
		height: 0.472222rem;
		position: absolute;
		right: 10px;
		top: 30%;
	}

	/*包邮部分*/
	.baoyou{
		height: 1.111111rem;
		position: relative;
		top: 1.388889rem;
		left: 0;
		right: 0;
		background-color: #fff;
		border-top: 0.027778rem solid #D2D2D2;
	}
	/*包邮图标*/
	.baoyou>img{
		margin-top: 1.416667rem;
		width: 1.111111rem;
		height: 0.555556rem;
		position: absolute;
		top: -100%;
		left: 10px;
	}
	/**/
	.baoyou span{
		position: absolute;
		top: 35%;
		left: 1.488889rem;
	}
	/*再去逛逛*/
	.goshopping{
		position: relative;
		top: 1.44rem;
		height: 1.111111rem;
		background-color: #fff;
	}
	.goshopping img{
		width: 1.111111rem;
		height: 0.555556rem;
	}
	.shoppingP1{
		line-height: 1.111111rem;
		text-indent: 1.527778rem;
	}
	.shoppingP1 img{
		position: absolute;
		top: 20%;
		left: 10px;
	}
	.shoppingP2{
		position: absolute;
		top: 30%;
		right: 10px;
	}
	/*所有商品容器*/
	.allGoodsContainer{
		margin-top: 1.4rem;
		border: 0.027778rem solid #fff;
		margin-bottom: 2.861111rem;
	}
	.everGood{
		height: 2.777778rem;
		margin-top: 2px;
		background-color: #fff;
	}
	/*商品图片*/
	.goodImg{
		width: 2.166667rem;
		height: 2.166667rem;
	}
	.everGood span{
		display: inline-block;
		width: 0.833333rem;
		height: 0.833333rem;
		line-height: 0.833333rem;
		text-align: center;
		background-color: orange;
	}
	/*结算板块*/
	.jiesuan{
		width: 100%;
		height: 1.388889rem;
		position: fixed;
		bottom: 1.444444rem;
		background-color: #fff;
		border-bottom: 0.027778rem solid #fff;
	}
</style>