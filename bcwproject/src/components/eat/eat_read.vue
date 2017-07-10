<template>
	<div>
		<p class="read">{{msg}}</p>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				msg : '阅读'
			}
		}
	}
</script>
<style>
	.read{
		line-height: 2.777778rem;
		text-align: center;
		font-size: 0.833333rem;
		border-bottom: 0.027778rem solid #E5E5E5;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 23;
		background-color: #fff;
	}
</style>