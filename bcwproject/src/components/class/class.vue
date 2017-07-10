<template>
	<div class="main">
		<!-- 顶部搜索 -->
		<div class="header">
			<span>
				<em>王者农药零食专场</em>
			</span>
		</div>
	
		
		<!-- 下方分类 -->
		<div class="classfiy">
			<div class="classfiy_top">
				<ul class="clear">
					<li v-for = "item in list" @click = "changeContent(item.type)" class="bottom">
						<img :src="item.image_url" alt="">
						<p>{{item.cat_name}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'head',
		data () {
			return {
				list : []
			}
		},
		//获取下方数据
		created(){
			this.$http.get('../../../static/data/class.json').then(res=>{
				console.log(res.data.result_data.bottom);
				this.list = res.data.result_data.bottom;

			})
		}
	}
</script>

<style>
	.main{
		height: 100%;
		width: 100%;
		overflow-y: auto;
	}
	.header{
		width: 100%;
		position: fixed;
		top:0;
		left: 0;
		background-color:#ff4f39;
		height:0.45rem;

	}
	.header>span{
		width: 90%;
		display: block;
	    height: 0.3rem;
	    line-height: 0.3rem;
	    border-radius: 17px;
	    color: #ff4f39;
	    background-color: white;
	    vertical-align: baseline;
	    position: fixed;
	    left: 5%;
	    top:0.07rem;
	}
	.header>span>em{
		font-style: normal;
	    display: inline-block;
	    height: 0.35rem;
	    color: red;
	    line-height: 0.35rem;
	    padding-left: 30px;
	    font-size: 0.1rem;
	    background: url('../../../static/imgs/icon_search_3.png') no-repeat 5px;
	    background-size: 20px;
	    position: fixed;
	     left: 5%;
    	top:0.05rem;

	}
	.classfiy{
		width: 100%;
		position: fixed;
		top: 0.45rem;
		left:0;
		overflow-y: auto;
		height: 80%;
	}
	.classfiy_top{
		margin: 10px 0 0;
	}
	.clear{
		    padding: 0 10px;
    		overflow: hidden;
	}
	.clear>li{
		font-size: 0.1rem;
	}
	.clear>li>img{
		display: inline-block;
		width: 100%;
	}
	.bottom{
		float: left;
	    width: 25%;
	    text-align: center;
	    margin: 0 4.1% 10px;
	    border-radius: 5px;
	    list-style: none;
	}
</style>