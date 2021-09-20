var app = new Vue({
    el: '#app',
    data: {
      count:0
    },
    methods: {
      addCount: function(){
        this.count += 1;
      }
    }
})