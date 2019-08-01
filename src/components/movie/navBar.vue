<template>
	<div>
		<ul class="nav">
			<router-link tag='li' to='/movie/city' >当前位置</router-link>
			<router-link tag='li' to='/movie/nowPlaying' >正在热映</router-link>
			<router-link tag='li' to='/movie/comingsoon' >即将上映</router-link>
			<router-link tag='li' to='/movie/search' >search</router-link>
		</ul>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
//	import city from './movieComponents/city.vue'
	
	export default{
		name:'navBar',
		components:{
//			city
		}
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
	}
	li{
		font-size: 0.9rem;
		font-weight: bold;
		width: 25%;
		box-sizing: border-box;
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