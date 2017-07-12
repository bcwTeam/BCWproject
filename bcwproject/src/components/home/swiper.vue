<template>
	<div>
	   <swiper :options="swiperOption">
		    <swiper-slide v-for="slide,index in swiperPic" class="pic" :key='index'>
		    	<img :src="slide.image_url" alt="">
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
	  </swiper>
	</div>
</template>
<script>
	export default {
		props : [
			'swiperPic' 
		],
		data() {
	      return {
	        swiperOption: {
		        autoplay: 1500,
		        setWrapperSize :true,
		        pagination : '.swiper-pagination',
		        paginationClickable :true,
		        mousewheelControl : true,
	            observeParents:true,
	            loop : true,
	            autoplayDisableOnInteraction : false,
	        }
	      }
	    },
	}
</script>
<style>
	.pic{
		width: 100%;
	}
	.pic img{
		width: 100%;
	}
</style>