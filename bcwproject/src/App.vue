<template>
	<div>
		<router-view></router-view>
	    <ul class="tab_bar">
	        <li>
	          <router-link to="/">Home</router-link>
	        </li>
	        <li>
	          <router-link to="/class">Class</router-link>
	        </li>
	        <li>
	          <router-link to="/eat">Eat</router-link>
	        </li>
	        <li>
	          <router-link to="/cart">Cart</router-link>
	        </li>
	        <li>
	          <router-link to="/mine">Mine</router-link>
	        </li>
	    </ul>
	</div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
*{
  padding:0;
  margin:0
}
.tab_bar{
  list-style: none;
  display: flex;
  align-items: center;
  position: fixed;
  line-height: 46px;
  background-color: #dfdfdf;
  bottom:0;
  left:0;
  right:0
}
.tab_bar>li{
  width:25%;
  text-align: center;
}
</style>
