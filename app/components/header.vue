<template>
	<div class="header">
		<h1>{{message}}</h1>
    </div>
</template>

<script>
	export default{
		data:() =>{
    		return{
    			message:"vue"
    		}
    	},
	}
</script>

<style>
	.header{
	    text-align: center;
	    font-weight: normal;
	    font-size: 2em;
	    color: #fff;
	}
</style>