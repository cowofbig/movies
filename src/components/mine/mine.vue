<template>
	<div>
		<miao-header title='我的妞妞'></miao-header>
		<mine-login></mine-login>
		<miao-footer></miao-footer>
	</div>
</template>

<script>
	import miaoHeader from '@/components/movie/header.vue'
	import miaoFooter from '@/components/movie/footer.vue'
	import mineLogin from '@/components/mine/mineComponents/mineLogin.vue'
	
	
	export default{
		name:'mine',
		components:{
			miaoHeader,miaoFooter,mineLogin
		}
	}
</script>

<style>
</style>