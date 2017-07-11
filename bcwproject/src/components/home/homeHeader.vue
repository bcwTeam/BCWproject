<template>
	<div class="home_header">
		<header>
			<a class="search">
				<img src="../../../static/imgs/home/icon_search.png" alt="">
			</a>
		</header>
		<nav>
			<ul>
				<li v-for="item in navList">
					{{ item.title == "" ? item.image_url : item.title }}
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default{
		name: 'homeHeader',
		props: ['navList']
	}
</script>

<style type="text/css">
	.home_header header{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 1.0869rem;
		line-height: 1.0869rem;
		background-color: #fff;
		background-image: url(../../../static/imgs/home/icon_logo.png);
		background-repeat: no-repeat;
		background-size: 15%;
		background-position: center center;
		padding: 0 0.3rem;
	}

	.home_header .search{
		display: block;
		width: 0.6038rem;
		float: right;
		height: 1.0869rem;
		padding-top: 0.2rem;
	}
	.home_header .search img{
		width: 100%;
		height: auto;
		
	}
</style>


