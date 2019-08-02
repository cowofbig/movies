<template>
	<div class="box">
		<ul class="list">
			<li>
				<h3>喵喵影城</h3>
				<div class="address">
					<p>喵喵市喵喵区喵喵街miao号喵喵市喵喵区喵喵街miao号喵喵市喵喵区喵喵街miao号</p>
					<span class="dis">100km</span>
				</div>
				<p class="tag">
					<span>退</span>
					<span class="coupon">折扣卡</span>
					<span>小吃</span>
				</p>
				<p class="price">50<span>元起</span></p>
			</li>
			<li>
				<h3>喵喵影城</h3>
				<div class="address">
					<p>喵喵市喵喵区喵喵街miao号喵喵市喵喵区喵喵街miao号喵喵市喵喵区喵喵街miao号</p>
					<span class="dis">100km</span>
				</div>
				<p class="tag">
					<span>退</span>
					<span class="coupon">折扣卡</span>
					<span>小吃</span>
				</p>
				<p class="price">50<span>元起</span></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'cinemaDefaultList'
	}
</script>

<style scoped="scoped">
	.box{
		margin-top: 5.55rem;
	}
	.list{
		padding-left: 1rem;
		padding-right: 1rem;
		box-sizing: border-box;
		list-style: none;
	}
	.list li{
		padding-top: 1.3rem;
		padding-bottom: 1.3rem;
		border-bottom: 1px solid #E6E6E6;
		position: relative;
	}
	.list li h3{
		font-weight: normal;
		font-size: 1.2rem;
		color: #333;
	}
	.list li p{
		margin-top: 0.5rem;
		font-size: 0.8rem;
		color: #666;
	}
	.list li .tag span{
		border: 1px solid #589daf;
		color: #589daf;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
		display: inline-block;
		margin-top: 0.2rem;
	}
	.list li .tag .coupon{
		color: #ff9900;
		border: 1px solid #FF9900;
	}
	.list li .price{
		width: 20%;
		text-align: right;
		position: absolute;
		top: 0.5rem;
		right: 0;
		font-size: 1.3rem;
		color: #FF4500;
	}
	.list li .price span{
		font-size: 0.6rem;
		color: #FF4500;
	}
	.list li .address{
		width: 100%;
		overflow: hidden;
	}
	.list li .address p{
		width: 80%;
		float: left;
		line-height: 1.2rem;
	}
	.list li .address span{
		display: inline-block;
		width: 15%;
		float: right;
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #666;
		text-align: right;
	}
</style>