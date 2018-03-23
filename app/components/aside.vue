<template>
	<div class="aside" >
		<input type="text" class="done-input"
		  placeholder="你要做什么?"
		  v-on:keyup.enter="addTodo" v-model="message" >
		  <Dolist :addItem="msg"></Dolist>
	</div>
</template>
<script>
	import Dolist from './doList.vue'
	var list = []
	export default{
		data(){
			return {
				msg:list
			}
		},
		components:{
			Dolist,	
		},
		methods:{
			addTodo(e){
				list.push(this.message);
				e.target.value = ""
			}
		}
	}
</script>

<style>
	.aside{
		width:30%;
		min-height: 500px;
		background-color: #cdd; 
		margin:0 auto;
		padding:10px;
	}
	.done-input{
		width: 100%;
	    height: 30px;
	    border-radius:5px;
	    border: 1px solid #40a3f3;
	    outline: none;
	    font-size: 1.2em;
	}
</style>