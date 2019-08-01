<template>
	<div id="footer">
		<router-link tag='div' class="box" to='/movie' >电影</router-link>
		<router-link tag='div' class="box" to='/cinema' >影院</router-link>
		<router-link tag='div' class="box" to='/mine' >我的</router-link>
	</div>
</template>

<script>
	export default {
		name:'miaoFooter'
	}
</script>

<style scoped="scoped">
	#footer{
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		width: 100%;
		box-sizing: border-box;
		text-align: center;
		display: flex;
		justify-content: space-between;
		border-top: 2px solid #ccc;
	}
	#footer .box{
		width: 33%;
		font-size: 12px;
		padding: 0.6rem;
		color: #333;
		border-right: 1px solid #ccc;
	}
	#footer .box:last-child{
		border-right: none;
	}
	#footer .router-link-active{
		color: #FF4500;
	}
</style>