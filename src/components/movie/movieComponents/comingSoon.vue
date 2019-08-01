<template>
	<div class="comingsoonbox">
		<div class="list">
			<div class="imgbox">
				<img src="http://p0.meituan.net/128.180/movie/f75fcb7696d55452e32794b2219700b9840805.jpg"/>
			</div>
			<div class="detail">
				<h3>牛魔王烧烤猪八戒</h3>
				<p>评分:<span>9.6</span></p>
				<p>主演: 吕艳婷,囧森瑟夫,瀚墨</p>
				<p>2019-8-5 上映</p>
			</div>
			<img src="../../../assets/3d.png"/>
			<a href="">预售</a>
		</div>
		<div class="list">
			<div class="imgbox">
				<img src="http://p0.meituan.net/128.180/movie/f75fcb7696d55452e32794b2219700b9840805.jpg"/>
			</div>
			<div class="detail">
				<h3>牛魔王烧烤猪八戒</h3>
				<p>评分:<span>9.6</span></p>
				<p>主演: 吕艳婷,囧森瑟夫,瀚墨</p>
				<p>2019-8-5 上映</p>
			</div>
			<img src="../../../assets/3d.png"/>
			<a href="">预售</a>
		</div>
		<div class="list">
			<div class="imgbox">
				<img src="http://p0.meituan.net/128.180/movie/f75fcb7696d55452e32794b2219700b9840805.jpg"/>
			</div>
			<div class="detail">
				<h3>牛魔王烧烤猪八戒</h3>
				<p>评分:<span>9.6</span></p>
				<p>主演: 吕艳婷,囧森瑟夫,瀚墨</p>
				<p>2019-8-5 上映</p>
			</div>
			<img src="../../../assets/3d.png"/>
			<a href="">预售</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'comingSoon'
	}
</script>

<style scoped="scoped">
	.comingsoonbox{
		margin-top: 5.45rem;
	}
	.list{
		width: 100%;
		padding:0.6rem ;
		box-sizing: border-box;
		border-top: 1px solid #E6E6E6;
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
	}
	.detail p{
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		margin-top: 0.3rem;
		font-size: 14px;
		color: #666;
	}
	.detail p span{
		margin-left: 0.3rem;
		font-weight: bold;
		color: #faaf00;
	}
	.list>img{
		margin-top: 0.3rem;
		width: 14%;
	}
	.list>a{
		text-decoration: none;
		color: #fff;
		font-size: 12px;
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		border-radius: 3px;
		margin-left: 0.3rem;
		position: absolute;
		top: 50%;
		transform:translateY(-50%);
		background: #3c9fe6;
	}
</style>