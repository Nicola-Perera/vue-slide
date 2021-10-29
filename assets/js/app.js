const app = new Vue({
    el: '#root',
    data: {
        index: 0,
        countries: [
            {
                title:'Svezia',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima atque reiciendis unde deserunt, temporibus illum neque non sunt eum ducimus eligendi, ea odit fugiat quae? Fugiat nam odit accusantium maiores.',
                image:'./img/01.jpg',
                status: false
            },
            {
                title:'Svizzera',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima atque reiciendis unde deserunt, temporibus illum neque non sunt eum ducimus eligendi, ea odit fugiat quae? Fugiat nam odit accusantium maiores.',
                image:'./img/02.jpg',
                status: true
            },
            {
                title:'Gran Bretagna',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima atque reiciendis unde deserunt, temporibus illum neque non sunt eum ducimus eligendi, ea odit fugiat quae? Fugiat nam odit accusantium maiores.',
                image:'./img/03.jpg',
                status: false
            },
            {
                title:'Germania',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima atque reiciendis unde deserunt, temporibus illum neque non sunt eum ducimus eligendi, ea odit fugiat quae? Fugiat nam odit accusantium maiores.',
                image:'./img/04.jpg',
                status: false
            },
            {
                title:'Paradise',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima atque reiciendis unde deserunt, temporibus illum neque non sunt eum ducimus eligendi, ea odit fugiat quae? Fugiat nam odit accusantium maiores.',
                image:'./img/05.jpg',
                status: false
            },
            
        ]
    },
    methods: {
        slideUp: function() {
            this.index--

            if (this.index < 0) {
                this.index = this.countries.length -1
            }
        },
        slideDown: function() {

            this.index++

            if (this.index > this.countries.length -1) {
                this.index = 0;
            }
        }
    }
})