<template>
	<div>
		<ul class="nav">
			<router-link tag='li' to='/movie/city' class='router-link-active'>全城</router-link>
			<router-link tag='li' to='/movie/nowPlaying' >品牌</router-link>
			<router-link tag='li' to='/movie/comingsoon' >特色</router-link>
		</ul>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
//	import city from './movieComponents/city.vue'
	
	export default{
		name:'cinemaNavbar',

	}
</script>

<style scoped="scoped">
	.nav{
		position: fixed;
		top: 2.75rem;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: #fff;
		border-bottom: 1px solid #E6E6E6;
	}
	li{
		font-size: 1rem;
		width: 33%;
		padding-top: 0.7rem;
		padding-bottom: 0.7rem;
		list-style: none;
		text-align: center;
	}

	.nav .router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #EF4238;
	}
</style>