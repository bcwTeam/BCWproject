<template>
	<div class="detail">
		<h1>eat-detail</h1>
		<p>{{id}}</p>	
		<p>{{obj.title}}</p>
		<img :src="obj.imageUrl" alt="">
		<p>{{obj.description}}</p>
		<p>{{obj.comment_count}}</p>
		<form action="">
			<input type="text" placeholder="来说点什么吧">
			<button>发布</button>
		</form>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				id : '',
				list : [],
				obj : {},
			}
		},
		methods : {
			getData : function(){
				this.$http.get('../../../static/eatPageData/data1.json').then(res=>{
					this.list = res.data.result_data.list;
					for (var i = 0; i < this.list.length; i++) {
						if(this.list[i].eat_id == this.id){
							this.obj = this.list[i];
						}
					}
					console.log(this.obj)
				})
			},

		},
		created : function (){
			this.id = this.$route.params.id;
			this.getData(); 
		}
	}
</script>
<style scope>
	.detail{
		background-color: pink;
		height: 1200px;
		margin-bottom: 2.777778rem;
		width: 100%;
	}
	.detail img{
		width: 100%;
	}
	form{
		background-color: #fff;
		width: 100%;
		height: 3.333333rem;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 2.777778rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	form input{
		height: 1.944444rem;
		width: 16.666667rem;
		vertical-align: top;
		border: none;
		background-color: #E5E5E5;
		border-radius: 0.277778rem;
		font-size: 0.833333rem;
		text-indent: 0.138889rem;
		outline: none;
	}
	form button{
		height: 1.944444rem;
		width: 2.777778rem;
		vertical-align: top;
		border: none;
		background-color: #FF4F39;
		color: #fff;
		border-radius: 0.25rem;
	}
</style>