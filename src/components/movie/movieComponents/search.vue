<template>
	<div class="searchbox">
		<div class="search_wrapper">
			<i>☌</i>
			<input type="text" value="" />
		</div>
		<div class="info">
			<div class="title">
				<h3>电影/电视剧/综艺</h3>
			</div>
			<div class="list">
				<div class="imgbox">
					<img src="http://p0.meituan.net/128.180/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg"/>
				</div>
				<div class="detail">
					<h3>孙悟空大战铁扇公主</h3>
					<p>The Secret Life of Pets 2</p>
					<p>喜剧,动画,冒险</p>
					<p>2019-07-05</p>
				</div>
				<span>9</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'search'
	}
</script>

<style scoped="scoped">
	.searchbox{
		margin-top: 5.46rem;
		width: 100%;
	}
	.search_wrapper{
		width: 100%;
		background: #f5f5f5;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		position: relative;
		box-sizing: border-box;
		border-top:1px solid #E5E5E5;
		border-bottom: 1px solid #E5E5E5;
	}
	.search_wrapper input{
		width: 92%;
		margin-left: 4%;
		padding: 0.4rem;
		padding-left: 1.3rem;
		box-sizing: border-box;
		border-radius: 5px;
		outline: none;
		border: 1px solid #E6E6E6;
	}
	.search_wrapper i{
		display: inline-block;
		font-size: 16px;
		height: 16px;
		transform: rotate(90deg);
		position: absolute;
		top: 0.8rem;
		left: 1.5rem;
	}
	.info{
		background: #fff;
	}
	.info .title{
		border-bottom: 1px solid #E6E6E6;
	}
	.info .title>h3{
		font-size: 15px;
		padding: 0.5rem;
		/*margin-left: 0.3rem;*/
		color: #999;
	}
	
	
	
	.list{
		width: 100%;
		padding:0.6rem ;
		box-sizing: border-box;
		border-bottom: 1px solid #E6E6E6;
		overflow: hidden;
		position: relative;
	}
	.list .imgbox{
		width: 19%;
		float: left;
	}
	.list .imgbox img{
		width: 100%;
	}
	.detail{
		width: 50%;
		float: left;
		margin-left: 0.7rem;
	}
	.detail h3{
		font-size: 18px;
		font-weight: normal;
	}
	.detail p{
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		margin-top: 0.4rem;
		font-size: 12px;
		color: #333;
	}
	.detail p span{
		margin-left: 0.3rem;
		font-weight: bold;
		color: #faaf00;
	}
	.list>span{
		color: #fc7103;
		font-size: 16px;
		position: absolute;
		top: 10%;
		right: 5%;
	}
</style>