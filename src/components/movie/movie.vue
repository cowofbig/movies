<template>
	<div>
		<miao-header></miao-header>
		<nav-bar></nav-bar>
		<miao-footer></miao-footer>
	</div>
</template>

<script>
	import miaoHeader from './header.vue'
	import miaoFooter from './footer.vue'
	
	import navBar from './navBar.vue'
	
	
	export default{
		name:'movie',
		components:{
			miaoHeader,miaoFooter,navBar
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
	}
	li{
		font-size: 0.9rem;
		font-weight: bold;
		width: 20%;
		box-sizing: border-box;
		padding: 0.5rem;
		list-style: none;
		text-align: center;
	}
	.content{
		margin-top: 4.95rem;
	}
	.nav .router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #EF4238;
	}
</style>