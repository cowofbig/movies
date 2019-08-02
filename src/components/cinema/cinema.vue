<template>
	<div>
		<miao-header title='妞妞影院'></miao-header>
		<cinema-navbar></cinema-navbar>
		<miao-footer></miao-footer>
	</div>
</template>

<script>
	import miaoHeader from '@/components/movie/header.vue'
	import miaoFooter from '@/components/movie/footer.vue'
	import cinemaNavbar from '@/components/cinema/cinemaNavbar.vue'
	
	
	
	export default{
		name:'cinema',
		components:{
			miaoHeader,miaoFooter,cinemaNavbar
		}
	}
</script>

<style>
</style>