let data = {
    title: '小貓貓製造機',
    input: {
        name: '豆花',
        src: './img/cat-01.png',
        like: ['伸懶腰']
    },

    // 產生選單用的貓貓陣列
    cat: [
        { title: '小灰貓', like: '玩毛球', src: "./img/cat-01.png" },
        { title: '小黑貓', like: '伸懶腰', src: "./img/cat-02.png" },
        { title: '小花貓', like: '看上面', src: "./img/cat-03.png" },
        { title: '小虎貓', like: '翹尾巴', src: "./img/cat-04.png" },
        { title: '小黃貓', like: '睡覺覺', src: "./img/cat-05.png" },
        { title: '小灰虎', like: '逗貓棒', src: "./img/cat-06.png" },],
    
    //製造貓貓們的陣列 
    newCat: [
        { title: '小灰貓', like: '玩毛球', src: "./img/cat-01.png" },
        { title: '小黑貓', like: '伸懶腰', src: "./img/cat-02.png" },
        { title: '小花貓', like: '看上面', src: "./img/cat-03.png" },
        { title: '小虎貓', like: '翹尾巴', src: "./img/cat-04.png" },
        { title: '小黃貓', like: '睡覺覺', src: "./img/cat-05.png" },
        { title: '小灰虎', like: '逗貓棒', src: "./img/cat-06.png" },]
}

let vm = new Vue({
    el: '#app',
    data: data,

    methods: {
        addNewCat() {
            if (this.input.name && this.input.src) {
                this.newCat.push({
                    title: this.input.name,
                    like: this.input.like.join('、'),
                    src: this.input.src
                })
            }
        }
    }
})