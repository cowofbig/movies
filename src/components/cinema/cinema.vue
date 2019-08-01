<template>
	<div>
		<miao-header title='妞妞影院'></miao-header>
		<miao-footer></miao-footer>
	</div>
</template>

<script>
	import miaoHeader from '@/components/movie/header.vue'
	import miaoFooter from '@/components/movie/footer.vue'
	
	
	export default{
		name:'cinema',
		components:{
			miaoHeader,miaoFooter,
		}
	}
</script>

<style>
</style>