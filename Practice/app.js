var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue!",
        name: "naman",
        age: 25,
        a: 0,
        b: 0
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        },
        add: function (inc) {
            this.age += inc;
        },
        sub: function (dec) {
            this.age -= dec;
        },
        click: function () {
            alert('you clicked link')
        }
    },

});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' +
            new Date().toLocaleString()
    },
    methods:{
        change: function(){
            app.message = "Changed Vue!"
        }
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
        age: 25,
        a: 0,
        b: 0
    },methods:{
        change: function(){
            app.message = "Changed Vue!"
        }
    },
    computed: {
        addToA: function () {
            return this.age + this.a
        },
        addToB: function () {
            return this.age + this.b
        }
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [{ text: 'Learn Javascript' },
        { text: 'Learn Vue' },
        { text: 'Bulid something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        error: false,
        success: false
    }
})

Vue.component('greetings',{
    template: '<p>Hey There i am {{name}}'+
    '<button @click="change">Change Name</button></p>',
    data: function(){
        return {
            name: 'Naman'
        }
    },
    methods:{
        change: function(){
            this.name = 'Man'
        }
    }
});

new Vue({
    el:'#comp1'
});
new Vue({
    el:'#comp2'
})

new Vue({
    el: '#refs',
    data:{
        output: 'Your Fav Food'
    },
    methods:{
        readRefs: function(){
            this.output= this.$refs.input.value
        } 
    }
})