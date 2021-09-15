
var app = new Vue({
    el: "#app",
    data: {
        images: [
            {
                source: "img/nba1.jpg",
                alt: "img-1"
            },
            {
                source: "img/nba2.jpg",
                alt: "img-2"
            },
            {
                source: "img/nba3.jpg",
                alt: "img-3"
            },
            {
                source: "img/nba4.jpg",
                alt: "img-4"
            },
        ],
        imageIndex: 0,
    },

    methods: {
        nextImage : function (){
            this.imageIndex++;

            if (this.imageIndex >= this.images.length){
                this.imageIndex = 0
            }
            console.log(this.imageIndex)
        },

        previousImage : function (){
            this.imageIndex--;

            if (this.imageIndex < 0){
                this.imageIndex = this.images.length
            }
            console.log(this.imageIndex)
        },
    },
});