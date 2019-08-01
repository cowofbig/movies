<template>
	<div >
		<h2>{{title}}</h2>
	</div>
</template>

<script>
	export default{
		name:'miaoHeader',
		props:{
			title:{
				type:String,
				default:'妞妞电影'
			}
		}
	}
</script>

<style scoped="scoped">
	div{
		width: 100%;
		color: #fff;
		text-align: center;
		box-sizing: border-box;
		padding: 0.4rem;
		background: orangered;
		position: fixed;
		top: 0;
		left: 0;
	}
	h2{
		font-style: normal;
		font-weight: normal;
	}
</style>