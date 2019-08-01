<template>
	<div>
		<miao-header title='我的妞妞'></miao-header>
		<miao-footer></miao-footer>
	</div>
</template>

<script>
	import miaoHeader from '@/components/movie/header.vue'
	import miaoFooter from '@/components/movie/footer.vue'
	
	export default{
		name:'mine',
		components:{
			miaoHeader,miaoFooter
		}
	}
</script>

<style>
</style>