<template>
	<div>
		<read></read>
		<eatNav></eatNav>
	</div>
</template>

<script>
	import read from '../../components/eat/eat_read'
	import eatNav from '../../components/eat/nav'
	export default{
		components : {
			read,
			eatNav
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>