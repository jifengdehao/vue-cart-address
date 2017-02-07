// vue 1.0
/*
var app=new Vue({
	el:"",
	data:{
		
	},
	methods:{
		
	},
	ready:function(){
		
	},
})


// vue 2.0
var app=new Vue({
	el:"",
	data:{
		
	},
	methods:{
		
	},
	beforeCreate:function(){   //创建前
		this.$nextTick(function () {
	 	
	   });
	},
	created:function(){   //创建
	   this.$nextTick(function () {
	 	
	   });
	},
	mounted:function(){ //创建完成
	   this.$nextTick(function () {
	 	
	   });
	},
	destroyed: function () { //销毁
	  this.$nextTick(function () {
	  	
	  })
	},
	filters:{   //局部过滤器
		
	}
})
*/
/*
Vue.filter('reverse', function (value) {  //全局过滤器
  return value.split('').reverse().join('')
})
new Vue({
	el:"",
	data:{
		message:"abc"
	}
});
<!-- 'abc' => 'cba' -->
<div id="app">
<span v-text="message | reverse"></span>
</div>
*/

var app = new Vue({
	el: "#app",
	data: {
		message: "hello vue js",
		cart: [],
		totalMoney:0
	},
	mounted: function() { //创建完成
		this.$nextTick(function() {
			this.changMessage();
			this.getData();//渲染数据
		});
	},
	methods: {
		changMessage: function() {
			this.message = "chang message";
		},
		getData: function() {
			this.$http.get("data/cartData.json").then(response => {
				console.log(this);
				console.log(response.body);
				console.log(response.url);
				console.log(response.status);
				console.log(response.statusText);
				console.log(response.ok);
				if(response.body.status===1){
					this.cart=response.body.result.list;
					this.totalMoney=response.body.result.totalMoney;
				}
			}, response => {
				// error callback
				console.log(response.body);
			})
		}
	},
	filters: { 	//局部过滤器
		formatMoney: function (value,quentity) {
			if(!quentity)quentity=1;
			return "¥ "+(value*quentity).toFixed(2) +"元";
		}
	}
})