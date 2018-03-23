import Vue from 'Vue'
import App from './App.vue'
import './css/index.css'

var root = document.getElementById("app");

new Vue({
	render: (h) => h(App)
}).$mount(root)