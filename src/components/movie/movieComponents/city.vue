<template>
	<div class="citybox">
		<h3 class="title">热门城市</h3>
		<ul class="hotcity">
			<li>北京</li>
			<li>上海</li>
			<li>广州</li>
			<li>天津</li>
			<li>杭州</li>
			<li>南京</li>
			<li>成都</li>
		</ul>
		<div>
			<h3 class="title">A</h3>
			<ul class="cities">
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
			</ul>
		</div>
		<div>
			<h3 class="title">A</h3>
			<ul class="cities">
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
				<li class="place">的规划计划</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'city'
	}
</script>

<style scoped="scoped">
	.citybox{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		margin-top: 5.45rem;
		overflow: hidden;
		background: #fff5f0;
	}
	.title{
		width: 100%;
		font-size: 14px;
		font-weight: normal;
		padding: 0.3rem;
		background: #f0f0f0;
		margin-top: 1rem;
		padding-left: 1.3rem;
	}
	.hotcity{
		padding-left: 1rem;
		padding-right: 1rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.hotcity li{
		width: 27%;
		padding: 0.4rem;
		margin-top: 0.7rem;
		background: #fff;
		float: left;
		list-style: none;
		text-align: center;
		border: 1px solid #e6e6e6;
		border-radius: 3px;
	}
	.cities{
		margin-top: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		list-style: none;
	}
	.place{
		line-height: 30px;
	}
</style>