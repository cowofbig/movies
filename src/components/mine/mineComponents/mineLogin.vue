<template>
	<div class="box">
		<input type="text" name="" id="" value=""placeholder="请输入账户名/手机号/Email" />
		<input type="password" placeholder="请输入您的密码" value="" />
		<button>登录</button>
		<div class="btn">
			<a href="" class="left">立即注册</a>
			<a href="" class="right">找回密码</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.box{
		margin-top: 2.75rem;
		box-sizing: border-box;
		overflow: hidden;
	}
	input{
		font-size: 0.8rem;
		width: 100%;
		box-sizing: border-box;
		padding: 0.5rem;
		border: none;
		border-bottom: 1px solid #ccc;
		outline: none;
		line-height: 2rem;
	}
	button{
		width: 94%;
		border-radius: 5px;
		color: #fff;
		font-size: 1.3rem;
		background: #e54847;
		border: none;
		line-height: 3rem;
		margin: 1rem 50%;
		transform: translateX(-50%);
	}
	.btn{
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		box-sizing: border-box;
		font-size: 0.6rem;
	}
	.btn a{
		text-decoration: none;
		color: #e54847;
	}
	.btn .left{
		float: left;
	}
	.btn .right{
		float: right;
	}
</style>