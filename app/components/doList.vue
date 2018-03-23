<template>
	<div class="container">
		<div id="disList" v-for="(item,index) in list" :key="index">
			<span>{{item}}</span>
			<button class="btn del" @click="delItem">del</button>
			<button class="btn edit" @click="editItem">edit</button>
		</div>
	</div>
</template>

<script>

	export default{
		props:{
			addItem:Array
		},
		data(){
			
			return {
				list:this.addItem,
			}
		},
		methods:{
			editItem(e){
				
			},
			delItem (e){
				console.log(e.target.parent);
			}
		}
	}
</script>

<style>
	#disList{
		background-color: #fff;
		height:35px;
		line-height: 30px;
		border-radius: 2px;
    	margin: 5px;
	}
	#disList:hover{
		box-shadow: 0px 0px 2px #000;
	}

	#disList input{
		outline: none;
		border: 0;
		width:100%;
		height:100%;
	}
	.btn{
		float: right;
		width:30px;
		height:25px;
		margin:5px;
		border:0;
		color:#fff;
		cursor: pointer;
		border-radius: 3px;
	}
	.del{
		background-color: #f00000;
	}	
	.edit{
		background-color: #002eff;
	}
</style>