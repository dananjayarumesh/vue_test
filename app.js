new Vue({
	el: '#app',
	data: {
		name: 'Rumesh',
		message: 'Hello Vue!',
		website: 'www.test.com',
		websiteTag: '<a href="http://www.test.com">Test html output</a>'
	},
	methods:{
		greet: function(time){
			return 'Good ' + time + ' ' + this.name;
		}
	} 

})


new Vue({
	el: '#app-events',
	data: {
		number: 33,
		x:0,
		y:0
	},
	methods:{
		add: function(val){
			this.number+=val;
		},
		substract: function(val){
			this.number-=val;
		},
		updateXY: function(event){
			// this.number-=val;
			// console.log(event);

			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	} 
})


new Vue({
	el: '#app-events-modify',
	data: {
		number: 33,
		x:0,
		y:0
	},
	methods:{
		add: function(val){
			this.number+=val;
		},
		substract: function(val){
			this.number-=val;
		},
		updateXY: function(event){
			// this.number-=val;
			// console.log(event);

			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		linkClick: function(){
			alert('link clicked with prevent default');
		}

	} 
})

new Vue({
	el: '#app-events-keyboard',
	data: {
		
	},
	methods:{
		nameEnter: function(e){
			console.log(this);
			alert('You entered name');
		},
		ageEnter: function(e){
			console.log(this);
			alert('You entered age');
		}
	} 
})

new Vue({
	el: '#app-twoWay-dataBinding',
	data: {
		name: 'text'
	},
	methods:{

	} 
})
